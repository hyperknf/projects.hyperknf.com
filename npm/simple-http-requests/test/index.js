const data = require("./data.js")
const { Requests, Headers } = require("../index.js")

const headers = new Headers({
    "name": "Content-Type",
    "value": "application/json"
})
Requests.post("...", headers, data).then(response => {
    console.log(response)
})