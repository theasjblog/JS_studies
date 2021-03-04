myLogTitle('Map')
var myArray = [1, 2, 3, 4, 5]

/*
map applies the function to each
element of the array

res = myArray.map(function (n) {
    return n * 3
})

myLog(res)
*/

// same as
// n => is the same as function(n){}
res = myArray.map(n => n * 3)
myLog(res)

myLogTitle('Filter')
/*
returns the elements of the array
satisfying the condition
*/
res = res.filter(n => n % 2 === 0)//must return a boolean

myLog(res)

myLogTitle('Reduce')
/*
current is the current number
accumulator is from the previous step
*/
res = res.reduce((accumulator, current) => accumulator + current)

myLog(res)

myLogTitle("Combinations")
myLog('map + filter + reduce')

res = myArray.map(n => n * 3)
    .filter(n => n % 2 === 0)
    .reduce((a, c) => a + c)
myLog(res)