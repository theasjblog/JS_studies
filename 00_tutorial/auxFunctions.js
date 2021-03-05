// simple function to make sure we go to a new line after we print
function myLog(stuffPrint) {
    // <br> makes a new line
    document.write(stuffPrint + "<br>")
}

function myLogTitle(stuffPrint) {
    // <br> makes a new line
    document.write("<br><br><b>" + stuffPrint + "</b><br>")
}

function spacers() {
    document.write("<br>*************************************<br>")
}

function printCode(codeLine, spacers) {
    for (var i = 1; i <= spacers; i++) {
        codeLine = "&nbsp;&nbsp;" + codeLine
    }
    return codeLine + "<br>"
}

function fullCodeString(codeString) {
    document.write("<code>" + codeString + "</code>")

}