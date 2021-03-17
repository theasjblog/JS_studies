// import module
import * as printHelper from './helpers.js'

const container = document.getElementById("container20");

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

// Dog inherit properties and methods of Animal
class Dog extends Animal {
    constructor(name, age, breed) {
        // I do not neerd to say this.name=name or this.age=age, because they are inherited from Animal
        // we pass them to the super constructor with super()
        super(name, age)
        this.breed = breed
    }
    logBreed() {
        return `${this.name} is ${this.breed}`
    }

    // to call a super method:
    logFromDog() {
        // must use the return
        return super.ageIs()
    }
}

// create an instance of Dog
const lea = new Dog('Lea', 8, 'Cocker Spaniel')
printHelper.addChild(container, `Inherited from Animal: <code>lea.eat(): </code>${lea.eat()}` + '<br>')
printHelper.addChild(container, `Inherited from Animal: <code>lea.ageIs(): </code>${lea.ageIs()}` + '<br>')
printHelper.addChild(container, `New method for Dog: <code>lea.logBreed(): </code>${lea.logBreed()}` + '<br>')
printHelper.addChild(container, `Using super method: <code>lea.logFromDog(): </code>${lea.logFromDog()}` + '<br>')
