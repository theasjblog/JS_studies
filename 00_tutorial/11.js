// import module
import * as printHelper from './helpers.js'

var container = document.getElementById("container11");

// Example 1
const address = {
    city: 'LA',
    country: 'USA',
    postCode: 'LA44'
}
const name = {
    firstName: 'Andy',
    lastName: 'Jones'
}
printHelper.addChild(container,
    `<code>address: </code>${JSON.stringify(address)}` + '<br>')
printHelper.addChild(container,
    `<code>name: </code>${JSON.stringify(name)}` + '<br>')


printHelper.addChild(container,
    'To concatenate the two objects without spread operrator you would need to create a ew one and reference all the existsing items one by one.<br>')
printHelper.addChild(container,
    'With the spread operator we can do:<br>')
printHelper.addChild(container,
    '<code>const person = {...address, ...name}</code><br>')
const person = { ...address, ...name }
printHelper.addChild(container,
    `<code>person: </code>${JSON.stringify(person)}` + '<br>')