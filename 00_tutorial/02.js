myLogTitle('If statement')
myLog('Example 1:')
var person = {
    age: [19, 20],
    name: ['Mario', 'Augusto']
}
var targetAge = 20
for (var i = 0; i < person.age.length; i++) {
    if (person.age[i] == targetAge) {
        myLog(person.name[i] + " is " + targetAge + " years old")
    } else {
        myLog(person.name[i] + " is NOT " + targetAge + ". " + person.name[i] + " is " + person.age[i] + " years old")
    }
}

myLog('<br>Example 2:')
var person = [{
    age: 10,
    name: 'Franco'
}, {
    age: 17,
    name: 'Mario'
}, {
    age: 20,
    name: 'Augusto'
}]
var targetAge = 18
for (var i = 0; i < person.length; i++) {
    if (person[i].age == targetAge - 1) {
        myLog(person[i].name + " is almost an adult")
    } else if (person[i].age < targetAge - 1) {
        myLog(person[i].name + " is not adult")
    } else {
        myLog(person[i].name + " is an adult")
    }
}

myLogTitle('Switch statement')
// this does not work for that is >18
myLog('Broken switch:')
for (var i = 0; i < person.length; i++) {
    switch (person[i].age) {
        case 17: myLog(person[i].name + " is almost an adult")
            break;
        case 18: myLog(person[i].name + " is an adult")
            break;
        default: myLog(person[i].name + " is not an adult")
    }
}

// this works that is >18
myLog('<br>Working switch:')
for (var i = 0; i < person.length; i++) {
    switch (true) {
        case (person[i].age == targetAge - 1): myLog(person[i].name + " is almost an adult")
            break;
        case (person[i].age >= targetAge): myLog(person[i].name + " is an adult")
            break;
        default: myLog(person[i].name + " is not an adult")
    }
}

myLog('<br> Example:')
switch (new Date().getDay()) {
    case 1: myLog('Monday')
        break
    case 2: myLog('Tuesday')
        break
    case 3: myLog('Wednesday')
        break
    case 4: myLog('Thursday')
        break
    case 5: myLog('Friday')
        break
    case 6: myLog('Saturday')
        break
    case 0: myLog('Sunday')
        break
    default: myLog(new Date().getDay() + " is unknown")
        break;
}

myLogTitle('Logical and comparison operators')
myLog(10 == 10)
myLog(10 != 10)
myLog(!(10 == 10))// best practice to put the negated part in parenthesis
myLog('10' == 10)// careful: this is true because '10' is evaluated
myLog('10' === 10)// this is false, as it checks also for type equality
myLog(10 == 10 && 20 == 10)
myLog(10 == 10 || 20 == 10)
