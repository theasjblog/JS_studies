// simple function to make sure we go to a new line after we print
function myLog(stuffPrint){
    // <br> makes a new line
    document.write(stuffPrint + "<br>")
}

// print from for loop
for (var i=0; i<5; i++){
    myLog("Iteration of i " + i)
}

// Objects
var nameP = 'Adrian'
var ageP = 37
var hasDrivingLicenceP = true

var person = {
    name:nameP,
    age:ageP,
    hasDrivingLicence:hasDrivingLicenceP,
    // nested object
    address:{
        firstLine:'123',
        postCode:'H1L',
        country:'UK'
    }}
// ways to display objects
myLog(person)
myLog(person.nameP)
myLog(JSON.stringify(person))
myLog(Object.values(person))
myLog(JSON.stringify(person.address))
