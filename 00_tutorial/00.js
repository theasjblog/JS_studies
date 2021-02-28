/*
In this file:
Print
Print in loop
Objects
Arrays
Functions
*/

// print from for loop
myLogTitle('Print for loop')
for (var i = 0; i < 5; i++) {
    myLog("Iteration of i " + i)
}

// Objects
myLogTitle('Objetcs')
var nameP = 'Adrian'
var ageP = 37
var hasDrivingLicenceP = true

var person = {
    name: nameP,
    age: ageP,
    hasDrivingLicence: hasDrivingLicenceP,
    // nested object
    address: {
        firstLine: '123',
        postCode: 'H1L',
        country: 'UK'
    }
}
// ways to display objects
myLog(person)
myLog(person.nameP)
myLog(JSON.stringify(person))
myLog(Object.values(person))
myLog(JSON.stringify(person.address))
myLog(Object.keys(person))
myLog(Object.values(person))

// arrays
myLogTitle('Arrays')
var names = ['Adrian', 'Alex', 'Maria']
myLog(names)
myLog(names[2])
myLog(names.length)
// loop method 1
for (var i of names) {
    myLog("Iteration of i " + i)
}
// loop method 2
names.forEach(function (i, index) {
    myLog(index + ":" + i)
})

// functions
myLogTitle('Functions')
function doAddition(x, y) {
    return (x + y)
}
var x = 5
var y = 7
myLog("Sum of " + x + " and " + y + " is: " + doAddition(5, 7))