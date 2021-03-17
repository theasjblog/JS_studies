// import module
import * as printHelper from './helpers.js'

const container = document.getElementById("container18");


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
}

// note the "new"
const dog = new Animal('dog', 7)
const eating = dog.eat()
const ageAnimal = dog.ageIs()
printHelper.addChild(container, `<code>dog.eat(): </code>${eating}` + '<br>')
printHelper.addChild(container, `<code>dog.ageIs(): </code>${ageAnimal}` + '<br>')