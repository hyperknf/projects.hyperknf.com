const config = require("../config.js")

module.exports = function (message, expected, got) {
    function format(m, e, g) {
        let text = `${m}`
        if (e) text += `\n\n== Expected:\n${e}`
        if (g) text += `\n\n== Got:\n${g}`
    }
    const formatted = format(message, expected, got)
    switch (config.on_error) {
        case 1: throw new Error(formatted)
        case 2: console.warn(formatted)
        case 3: console.log(formatted)
        default: throw new Error(format("Invalid configuration value", "number (1, 2 or 3)", `${typeof config.on_error} (${
            typeof config.on_error == "object" ? JSON.stringify(config.on_error) : String(config.on_error)
        })`))
    }
}