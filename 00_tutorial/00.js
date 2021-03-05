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

// print code in page
fullCodeString(
    printCode("for (var i = 0; i < 5; i++) {", 0) +
    printCode('myLog("Iteration of i " + i)', 1) +
    printCode("}", 0)
)

// execute
for (var i = 0; i < 5; i++) {
    myLog("Iteration of i " + i)
}


// Objects
myLogTitle('Objetcs')

fullCodeString(
    printCode("var person = {", 0) +
    printCode('name: "Adrian"', 1) +
    printCode('age: 37,', 1) +
    printCode('hasDrivingLicence: true,', 1) +
    printCode('// nested object', 1) +
    printCode('address: {', 1) +
    printCode("firstLine: '123',", 2) +
    printCode("postCode: 'H1L',", 2) +
    printCode("country: 'UK'", 2) +
    printCode("}", 1) +
    printCode("}", 0)
)
var person = {
    name: "Adrian",
    age: 37,
    hasDrivingLicence: true,
    // nested object
    address: {
        firstLine: '123',
        postCode: 'H1L',
        country: 'UK'
    }
}

myLogTitle("Ways to display objects")
fullCodeString(printCode('person'))
myLog(person)

fullCodeString(printCode('person.nameP'))
myLog(person.nameP)

fullCodeString(printCode('JSON.stringify(person)'))
myLog(JSON.stringify(person))

fullCodeString(printCode('JSON.stringify(person.address)'))
myLog(JSON.stringify(person.address))

fullCodeString(printCode('Object.keys(person)'))
myLog(Object.keys(person))

fullCodeString(printCode('Object.values(person)'))
myLog(Object.values(person))

// arrays
myLogTitle('Arrays')
fullCodeString(printCode("var names = ['Adrian', 'Alex', 'Maria']"))
var names = ['Adrian', 'Alex', 'Maria']

fullCodeString(printCode("names"))
myLog(names)

fullCodeString(printCode("names[2]"))
myLog(names[2])

fullCodeString(printCode("names.lenghth"))
myLog(names.length)

// loop method 1
fullCodeString(
    printCode("for (var i of names) {", 0) +
    printCode('myLog("Iteration of i " + i)', 1) +
    printCode('}', 0)
)
for (var i of names) {
    myLog("Iteration of i " + i)
}
// loop method 2
fullCodeString(
    printCode('names.forEach(function (i, index) {', 0) +
    printCode('myLog(index + ":" + i)', 1) +
    printCode('})', 0)
)
names.forEach(function (i, index) {
    myLog(index + ":" + i)
})

// functions
myLogTitle('Functions')
fullCodeString(
    printCode('function doAddition(x, y) {', 0) +
    printCode('return (x + y)', 1) +
    printCode('}', 0) +
    printCode('var x = 5', 0) +
    printCode('var y = 7', 0) +
    printCode('myLog("Sum of " + x + " and " + y + " is: " + doAddition(5, 7))', 0)
)
function doAddition(x, y) {
    return (x + y)
}
var x = 5
var y = 7
myLog("Sum of " + x + " and " + y + " is: " + doAddition(5, 7))