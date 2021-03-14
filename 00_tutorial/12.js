// import module
import * as printHelper from './helpers.js'

var container = document.getElementById("container12");

// Example 1
const hello = function () {
    const es6 = 'ES6'
    return `Hello ${es6}`
}

const powers = [1, 2, 3, 4].map(function (number, index) {
    return Math.pow(number, index)
})

const add = function (n1, n2) {
    return n1 + n2
}

const milesToKm = function (miles) {
    return miles * 1.60934
}

printHelper.addChild(container, `<code>hello(): </code>${hello()}` + '<br>')
printHelper.addChild(container, `<code>powers: </code>${powers}` + '<br>')
printHelper.addChild(container, `<code>add(100, 150): </code>${add(100, 150)}` + '<br>')
printHelper.addChild(container, `<code>milesToKm(100): </code>${milesToKm(100)}` + '<br>')

printHelper.addChild(container, 'To covert a function <code>fn = function(){}</code> into an arrow function, do <code>fn = () => {}</code><br>')

const helloArrow = () => {
    const es6 = 'ES6'
    return `Hello ${es6}`
}

// If I have only 1 line in the function, that is the return.
// I can remove it and remove the curly brakets.
const powersArrow = [1, 2, 3, 4].map((number, index) => Math.pow(number, index))

const addArrow = (n1, n2) => n1 + n2
// I have only one argument so I can remove the brackets around miles
const milesToKmArrow = miles => miles * 1.60934
