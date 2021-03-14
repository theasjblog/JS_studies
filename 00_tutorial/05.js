/*
This file follows a different patern because of the module:
- If loading directly the index.html, the module cannot be imported because of CORS
- We then need to start a local server by running the script startServer.py
- At that point, w cannot use the custom log functions because fail when used in
asynch mode
- The index.html for this section was therefore modified so that we add a div with id
"container"
- We then reference that container in this file and append children to it
*/
// import the math module
import * as Math from './supp05.js'
function addChild(container, contentElement) {
    // create the content
    var content = document.createElement("span");
    content.innerHTML = contentElement;
    //append the content to the container
    container.appendChild(content);
}
// get the main container
var container = document.getElementById("container");

addChild(container, 'Can export variable, class, function<br>')
addChild(container, "<code>import * as Math from './supp05.js'</code>, or specific functions instead of *, ")
addChild(container, "for instance <code>import {add, divide} from './supp05.js'</code> and then use <code>add()</code> instead of <code>Math.add()</code>")
addChild(container, '<br>Math.add(3, 5)<br>')
addChild(container, Math.add(3, 5))
addChild(container, '<br>Math.multiply(3, 5)<br>')
addChild(container, Math.multiply(3, 5))
addChild(container, '<br>Math.divide(3, 5)<br>')
addChild(container, Math.divide(3, 5))
addChild(container, '<br>Math.PI<br>')
addChild(container, Math.PI)
addChild(container, '<br>Math.multiply(Math.PI, Math.PI)<br>')
addChild(container, Math.multiply(Math.PI, Math.PI))
