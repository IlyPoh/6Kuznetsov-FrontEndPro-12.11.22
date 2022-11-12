// 1 Variant 

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



// 2 Variant 

let userArrayLength = Number(prompt('Enter how long your array is'))

if (!userArrayLength) {
    alert('Your entered something wrong')
} else if (userArrayLength <= 0){
    alert('You entered wrong number')
} else {

    for (let i = 1; i <= userArrayLength; i++) {
        
        if (i === 0) {
            let elementOfArray = prompt('Enter new element:')
            userArray.push(elementOfArray)
        } else {
            let elementOfArray = prompt(`Current array is: ${userArray.join(', ')}. Enter new element:`)
            userArray.push(elementOfArray)
        }
        console.log(userArray)
    }

    console.log(userArray)
    document.getElementById("currentArray").innerText = userArray.join(', ');
    alert(`Current array is: ${userArray.join(', ')}. Now lets sort your array`)
    userArray.sort()

    console.log(userArray)
    document.getElementById("currentArray").innerText = userArray.join(', ');
    alert(`Current array is: ${userArray.join(', ')}. Now lets remove 2-4 elements`)
    userArray.splice(1, 3);

    console.log(userArray)
    document.getElementById("currentArray").innerText = userArray.join(', ');
    alert(`Your final array looks like: ${userArray.join(', ')}`)

}