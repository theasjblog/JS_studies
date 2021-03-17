// import module
import * as printHelper from './helpers.js'

const container = document.getElementById("container16");


// Example 1

//printHelper.addChild(container, `<code>const names = ['Anna', 'Mariam', 'Joe', 'Mark', 'Matt']: </code>${names}` + '<br>')
const getUser = () => {
    return {
        name: 'John',
        surname: 'Doe',
        gender: 'male',
        age: 29,
        address: {
            country: 'United States',
            state: 'California',
            postcode: 'CA',
            fullAddress: {
                doorNumber: 22,
                street: 'LA st'
            }
        }
    }
}

const user = getUser()

/*
not great:
const name = user.name
const age = user.age
const country = user.address.country
const doorNumber = user.address.fullAddress.doorNumber
*/

// with destructuring
const { name, age } = user
printHelper.addChild(container, `<code>const {name, age} = user: </code>${name}, ${age}` + '<br>')
// nested object
printHelper.addChild(container, '<br>To work with nested objects:<br>')
const { address: { country: theCountry } } = user
printHelper.addChild(container, `<code>const{address:{country:country}} = user: </code>${theCountry}` + '<br>')
// nested nested object
const { address: { fullAddress: { doorNumber: theDoorNumber } } } = user
printHelper.addChild(container, `<code>const {address:{fullAddress:{theDoorNumber}}} = user: </code>${theDoorNumber}` + '<br>')

// change the name of the created variable
printHelper.addChild(container, '<br>With the syntax <code>const {name, age} = user</code> we create the variable name and age. We can assign different names using:<br>')
const { name: newName, age: newAge } = user
printHelper.addChild(container, `<code>const { name: newName, age: newAge } = user: </code>${newName}, ${newAge}` + '<br>')

// in loops
printHelper.addChild(container, '<br>We can also ise destructuring in loops:<br>')
const people = [{
    name: 'Marco',
    age: 20
},
{
    name: 'Marta',
    age: 50
}]
for (var { name: thisName, age: thisAge } of people) {
    printHelper.addChild(container, `<code>thisName, thisAge: </code>${thisName}, ${thisAge}` + '<br>')
}
