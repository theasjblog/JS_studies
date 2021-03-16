// import module
import * as printHelper from './helpers.js'

const container = document.getElementById("container15");


// Example 1
const names = ['Anna', 'Mariam', 'Joe', 'Mark', 'Matt']
printHelper.addChild(container, `<code>const names = ['Anna', 'Mariam', 'Joe', 'Mark', 'Matt']: </code>${names}` + '<br>')
/*
const a = names[0]
const b = names[1]
const c = names[2]
*/
// better way
// it starts from index 0 and continues
const [a, b, c] = names

printHelper.addChild(container, '<br>The below starts from index 0 of the array<br>')
printHelper.addChild(container, `<code>const [a, b, c] = names: </code>${a} ${b} ${c}` + '<br>')

// if I do not want the middle one, leave it emtpy:
const [d, , f] = names
printHelper.addChild(container, '<br>If I only want the items with index 0 and 2, just leave index 1 empty<br>')
printHelper.addChild(container, `<code>const [d, ,f] = names: </code>${d} ${f}` + '<br>')


const [g, , i, ...restOfNames] = names
printHelper.addChild(container, '<br><br>')
printHelper.addChild(container, `<code>const [g, , i, ...restOfNames] = names</code>, just print g and i = names: ${d} ${f}` + '<br>')
printHelper.addChild(container, `<code>const [g, , i, ...restOfNames] = names</code>, print restOfNames: ${restOfNames}` + '<br>')