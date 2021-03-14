// import module
import * as printHelper from './helpers.js'

var container = document.getElementById("container8");

printHelper.addChild(container, "<code>let name = </code> can be anything and reassigned<br>")
let name = 'Maria'
printHelper.addChild(container, "<code>let name = 'Maria'</code>: " + name + "<br>")
name = {}
printHelper.addChild(container, "<code>let name = {}</code>: " + name + "<br>")
name = 2
printHelper.addChild(container, "<code>let name = 2</code>: " + name + "<br>")

printHelper.addChild(container, "Instead, use <code>const</code>. This forbids reassignment<br>")

// this is OK
const person = {}
person['name'] = 'Maria'

// this is OK
const array = []
array.push('Maria')