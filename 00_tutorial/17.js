// import module
import * as printHelper from './helpers.js'

const container = document.getElementById("container17");


// Example 1
//printHelper.addChild(container, `<code>const names = ['Anna', 'Mariam', 'Joe', 'Mark', 'Matt']: </code>${names}` + '<br>')
const calculatePay = (yearSalary, bonus = 0) => yearSalary + bonus
printHelper.addChild(container, 'We have a function to calculate pay, and we set a default bonus:<br>')
printHelper.addChild(container, '<code>const calculatePay = (yearSalary, bonus = 0) => yearSalary + bouns</code><br>')
printHelper.addChild(container, `<code>calculatePay(22000, 0): </code>${calculatePay(22000, 0)}` + '<br>')
printHelper.addChild(container, `<code>calculatePay(22000): </code>${calculatePay(22000)}` + '<br>')
printHelper.addChild(container, `<code>calculatePay(22000, 2000): </code>${calculatePay(22000, 2000)}` + '<br>')

//Example 2
const calculatePay2 = (yearSalary, bonus = {
    teamBonus: 0,
    employeeBonus: 0
}) => { return yearSalary + bonus.teamBonus + bonus.employeeBonus }
printHelper.addChild(container, '<br>Below are results for when the defualt is an object: <code>bonus = {teamBonus: 0, employeeBonus: 0}</code><br>')
printHelper.addChild(container, `<code>calculatePay2(22000, {teamBonus: 10000, employeeBonus: 6000}): </code>${calculatePay2(22000, { teamBonus: 10000, employeeBonus: 6000 })}` + '<br>')
printHelper.addChild(container, `<code>calculatePay2(22000): </code>${calculatePay2(22000)}` + '<br>')
printHelper.addChild(container, 'This will not work because we did not define bonus.employeeBonus<br>')
printHelper.addChild(container, `<code>calculatePay2(22000, {teamBonus: 10000}): </code>${calculatePay2(22000, { teamBonus: 10000 })}` + '<br>')
