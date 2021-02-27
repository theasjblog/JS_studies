/*
In this file:
Print
Print in loop
Objects
Arrays
Functions
*/

// simple function to make sure we go to a new line after we print
function myLog(stuffPrint) {
    // <br> makes a new line
    document.write(stuffPrint + "<br>")
}

// print from for loop
myLog('Print for loop')
for (var i = 0; i < 5; i++) {
    myLog("Iteration of i " + i)
}

// Objects
myLog('<br> Objetcs')
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

// arrays
myLog('<br> Arrays')
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
myLog('<br> Functions')
function doAddition(x, y) {
    return (x + y)
}
var x = 5
var y = 7
myLog("Sum of " + x + " and " + y + " is: " + doAddition(5, 7))