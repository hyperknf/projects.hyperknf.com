const fetch = require("node-fetch")
const { process } = require("../Headers.js")
const error = require("../Error.js")

module.exports = function (url, headers, data) {
    return new Promise(async resolve => {
        let time = Date.now()

        if (!url || !headers || !data) error("At least one of the arguments are missing")
        if (typeof headers != "object") error("Invalid 'headers' argument", "JSON or 'Headers' object", typeof headers)
        
        const json = process(headers)

        const response = await fetch(url, {
            method: "post",
            headers: json,
            body: (typeof data == "object" ? JSON.stringify(data) : String(data))
        })
        let response_json
        try {
            response_json = await response.json()
        } catch (exception) {
            console.warn(`Response error:\n${JSON.stringify(exception)}\nYOUR REQUEST WAS STILL SUCCESSFUL, THERE WERE EXCEPTIONS ONLY IN THE RESPONSE`)
        }
        resolve({
            time: Date.now() - time,
            response: response_json
        })
    })
}