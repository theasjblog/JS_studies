export var addChild = function (container, contentElement) {
    // create the content
    var content = document.createElement("span");
    content.innerHTML = contentElement;
    //append the content to the container
    container.appendChild(content);
}
