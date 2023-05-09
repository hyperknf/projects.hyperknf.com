module.exports = function (message, expected, got) {
    function format(m, e, g) {
        let text = `${m}`
        if (e) text += `\n\n== Expected:\n${e}`
        if (g) text += `\n\n== Got:\n${g}`
    }
    throw new Error(format(message, expected, got))
}