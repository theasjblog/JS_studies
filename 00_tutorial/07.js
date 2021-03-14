// import module
import * as printHelper from './helpers.js'

var container = document.getElementById("container7");

//printHelper.addChild(container, 'Often used with classes and objects<br>')

printHelper.addChild(container, "Loop starting with <code>var i = 0</code><br>")
for (var i = 0; i < 10; i++) {
    printHelper.addChild(container, "<code>i</code> inside loop: " + i + "<br>")
}

// if I know do this, 'i' still still exists
printHelper.addChild(container, "<code>i</code> right after loop: " + i + "<br>")
printHelper.addChild(container, "Note that <code>i</code> still exists.<br><br>")

printHelper.addChild(container, "Loop starting with <code>let ii = 0</code><br>")
for (let ii = 0; ii < 10; ii++) {
    printHelper.addChild(container, "<code>ii</code> inside loop: " + ii + "<br>")
}

// if I know do this, 'i' still still exists
printHelper.addChild(container, "<code>i</code> right after loop: ii will not give anything (error).<br>")
printHelper.addChild(container, "<code>let</code> creates a local variable that does not exists anymore afteer the loop.<br><br>")