// import module
import * as printHelper from './helpers.js'

var container = document.getElementById("container9");

const name = 'Anna'
const country = 'Canada'
const age = 33

printHelper.addChild(container,
    "<code>name:</code>" + name + ", <code>country:</code>" + country + ", <code>age:</code>" + age + "<br>")


printHelper.addChild(container, "A better way:<br>")

printHelper.addChild(container, "`<code>name:</code> ${name}, <code>country:</code>${country}, <code>age:</code>${age}`" + "<br>")

printHelper.addChild(container, `<code>name:</code> ${name}, <code>country:</code>${country}, <code>age:</code>${age}<br>`)

printHelper.addChild(container, "Inside the curly brackets I can pass anything, for instance an operation like ${name.length}.<br>")

