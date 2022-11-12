let userArray = [];

function addingElementToArray() {
    let addingElement = document.getElementById("element-of-array");
    userArray.push(addingElement.value);
    
    document.getElementById("currentArray").innerText = userArray.join(', ');
}

function sortingElements() {
    userArray.sort();
    document.getElementById("currentArray").innerText = userArray.join(', ');
}

function removingElements() {
    userArray.splice(1, 3);
    document.getElementById("currentArray").innerText = userArray.join(', ');
}