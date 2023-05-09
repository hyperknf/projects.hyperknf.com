if (typeof require("node-fetch") != "function") throw new Error("The module will NOT work since the 'node-fetch' dependency does not exist, please make sure it is not deleted. If it is, please manually install 'node-fetch' version 2.6.10")

const Headers = require("./library/Headers.js")
const error = require("./library/Error.js")
const requests = {
    post: require("./library/Requests/Post.js")
}

const unexpected = (() => error("An unexpected error has occured that caused the files not to be processed properly"))

class Requests {
    constructor(type, url, headers, data) {
        return requests[type.toLowerCase()] ? requests[type.toLowerCase()](url, headers, data) : error("The 'type' argument you provided does not exist")
    }

    static post = requests.post || unexpected
}

module.exports = {
    Requests,
    Headers
}