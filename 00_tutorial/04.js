myLogTitle('Callbacks')
/*
function passed inside another function
*/

function callbackExample(name, callback) {// best practice is to call it callback
    myLog(callback(name))
}

var callback = name => 'Hello ' + name

res = callbackExample('asj', callback)
res = callbackExample('asj', name => "Hola " + name)
