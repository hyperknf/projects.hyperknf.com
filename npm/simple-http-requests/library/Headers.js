const error = require("./Error.js")

module.exports = class Headers {
    constructor (...data) {
        this._isHeadersObject = true
        for (let i = 0; i <= data.length - 1; i++) {
            const header = data[i]
            if (typeof header.name != "string") error("'name' should be string", "string", typeof header.name)
            if (typeof header.value != "string") error("'value' should be string", "string", typeof header.value)
            this[header.name] = header.value
        }
    }

    static process = (headers) => {
        if (typeof headers != "object") error("The 'headers' argument was not valid", "object or Headers object", typeof headers)
        let json = {}
        if (headers._isHeadersObject == true) {
            for (let header in headers) {
                if (header == "_isHeaderObject") continue
                if (typeof headers[header] == "string") json[header] = headers[header]
            }
        } else {
            console.warn("The 'headers' argument was not a valid Headers object, but a native JavaScript object, returning initial object without processing")
            return headers
        }
        return json
    }

    add(...data) {
        for (let i = 0; i <= data.length - 1; i++) {
            const header = data[i]
            if (typeof header.name != "string") error("'name' should be string", "string", typeof header.name)
            if (typeof header.value != "string") error("'value' should be string", "string", typeof header.value)
            this[header.name] = header.value
        }
        return this
    }
}