// import module
import * as printHelper from './helpers.js'

const container = document.getElementById("container14");

const pricePropName = 'PRICE'
const calculator = (name, price) => {
    return {
        // if the argument has the same name as the key, we can replace
        // name:name
        // with:
        name,
        // if we create a function, we can replace 
        // add: function (n1, n2) {
        //     return n1 + n2
        // }
        // with
        add(n1, n2) {
            return n1 + n2
        },
        // here we use the const pricePropName as an object propery name: PRICE
        // but we convert it to lower case
        [pricePropName.toLowerCase()]: price
    }
}


// Example 1
const calc = calculator('Marco', 19.99)
printHelper.addChild(container, `<code>calc.name:</code>${calc.name}` + '<br>')
printHelper.addChild(container, `<code>calc.add(10,20):</code>${calc.add(10, 20)}` + '<br>')
printHelper.addChild(container, `<code>calc.price:</code>${calc.price}` + '<br>')
