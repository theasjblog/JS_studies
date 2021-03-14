// import module
import * as printHelper from './helpers.js'
// get the main container
import Animal from './supp06.js'

var container = document.getElementById("container6");

printHelper.addChild(container, 'Often used with classes and objects<br>')

var animal = new Animal()
printHelper.addChild(container, "<code>animal.getClassType()</code>: " + animal.getClassType() + "<br>")