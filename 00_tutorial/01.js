// loops

fullCodeString(
    printCode('var person = [,0') +
    printCode('{', 1) +
    printCode("name: 'Alex',", 2) +
    printCode('age: 22', 2) +
    printCode('},', 1) +
    printCode('{', 1) +
    printCode("name: 'Maria',", 2) +
    printCode('age: 30') +
    printCode('{', 1) +
    printCode(']', 0)
)
var person = [
    {
        name: 'Alex',
        age: 22
    },
    {
        name: 'Maria',
        age: 30
    }
]

myLogTitle('For loop')

fullCodeString(
    printCode('for (var i = 0; i < person.length; i++) {', 0) +
    printCode('myLog(person[i].age)', 1) +
    printCode("myLog('---------')", 1) +
    printCode('})', 0)
)
for (var i = 0; i < person.length; i++) {
    /*
    Index is like in Pyhton here. Starts at 0 and you need to 
    go until length-1
    */
    myLog(person[i].name)
    myLog(person[i].age)
    myLog('---------')
}

myLogTitle('While loop')
fullCodeString(
    printCode('var n = 0', 0) +
    printCode('while (n < person.length) {', 0) +
    printCode('myLog(person[n].name)', 1) +
    printCode('myLog(person[n].age)', 1) +
    printCode("myLog('---------')", 1) +
    printCode('n += 1', 1) +
    printCode('}', 0)
)
var n = 0
while (n < person.length) {
    myLog(person[n].name)
    myLog(person[n].age)
    myLog('---------')
    n += 1
}

myLogTitle('Do loop')
myLog('The do loop executes at least once, even if the condition is not true.')
var i = 0
do {
    /*
    this part of the loop is performed at least once, and then until the
    while condition is satisfied.
    After that, we move the the while loop.
    Therefore, this loop will print the do up to 5 included,
    then it will move to the while loop
    */
    i++
    myLog('do' + i)
} while (i < 5) {
    myLog('while: ' + i)

}
myLog('----------')
var i = 0
do {
    /*
    In this variant we do not do anything in the while loop
    We just use it to control the do
    */
    i++
    myLog('do' + i)
} while (false);//note that this is always false, but the do will print at least once

myLogTitle('Break and continue')
// break exits the loop
// continua allows to go back
n = 0
while (n < 10) {
    n++
    if (n == 2) {
        continue
    }
    if (n == 6) {
        break
    }
    myLog(n)


}