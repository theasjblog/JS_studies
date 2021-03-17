// import module
import * as printHelper from './helpers.js'

const container = document.getElementById("container21");

printHelper.addChild(container,
    'Static methods belong to the class that initiate them rather than the individual objects, ' +
    'and they can be used without creating the object.<br>')

// Example 1
class Animal {
    // this is a must have to create the class
    constructor(name, age) {
        this.name = name,
            this.age = age
    }
    eat() {
        return `${this.name} is eating`
    }
    ageIs() {
        return `${this.name} is ${this.age}`
    }

    // static method
    static staticMethod() {
        return 'I am a static method of the Animal class<br>'
    }
}

// use the static method
printHelper.addChild(container, `<code>Animal.staticMethod(): </code>${Animal.staticMethod()}` + '<br>')