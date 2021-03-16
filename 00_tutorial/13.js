// import module
import * as printHelper from './helpers.js'

const container = document.getElementById("container13");

// Example 1
const person = {
    'name': 'Alex',
    'cars': ['ferrari', 'fiat'],
    toString: function () {
        return `${this.name} has ${this.cars}` + '<br>'
    }
}

res = person.toString()
printHelper.addChild(container, `<code>person.toString():</code>${res}`)

/*
Alternatives to use this context inside a function,
not working for some reason
const person = {
    'name': 'Alex',
    'cars': ['ferrari', 'fiat'],
    toString: function () {
        //const that = this
        return this.cars.forEach(function (car) {
            `${that.name} has ${car}`
        })
    }
}

const person = {
    'name': 'Alex',
    'cars': ['ferrari', 'fiat'],
    toString: function () {
        //const that = this
        return this.cars.forEach(function (car) {
            `${this.name} has ${car}`
        }.bind(this)())
    }
}

const person = {
    'name': 'Alex',
    'cars': ['ferrari', 'fiat'],
    toString: function () {
        //const that = this
        return this.cars.forEach(car => `${this.name} has ${car}`)
    }
}
*/

