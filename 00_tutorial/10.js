// import module
import * as printHelper from './helpers.js'

var container = document.getElementById("container10");

// Example 1
const arrayOne = ['Maria', 'Anna', 'Alex']
const arrayTwo = ['Marco', 'Luca', 'Franco']


printHelper.addChild(container, `arrayOne: ${arrayOne}, <br>arrayTwo: ${arrayTwo}` + "<br>")

printHelper.addChild(container, "Concatenate the two array with spread operator:<br>")
printHelper.addChild(container, "<code>const arrayConcat = [...arrayOne, ...arrayTwo];</code><br>")

const arrayConcat = [...arrayOne, ...arrayTwo];

printHelper.addChild(container, `arrayConcat: ${arrayConcat}` + "<br><br>")

// Example 2
printHelper.addChild(container, "Works with strings as well, splitting the string to letters:<br>")

const name = 'Maria'
const nameToArray = [...name]
printHelper.addChild(container, "<code>const name 'Maria'</code><br>")
printHelper.addChild(container, "<code>const nameToArray=[...name]</code><br>")
printHelper.addChild(container, `nameToArray: ${nameToArray}` + "<br><br>")

//Example 3
printHelper.addChild(container,
    "Let's say I have a functiona adding 3 numbers <code>addNumbers(n1, n2, n3){n1+n2+n3}</code> and I want to pass to it an array with three numbers.<br>")
printHelper.addChild(container,
    "Option 1: <code>addNumbers(myArray[0], myArray[1], myArray[2])</code><br>")
printHelper.addChild(container,
    "Option 2, with spread operator: <code>addNumbers(...numbers)</code><br>")
const addNumbers = function (n1, n2, n3) {
    return n1 + n2 + n3
}
const numbers = [1, 5, 9]

printHelper.addChild(container,
    "Option 1 output: " + addNumbers(numbers[0], numbers[1], numbers[2]) + "<br>")

printHelper.addChild(container,
    "Option 2 output: " + addNumbers(...numbers) + "<br>")

