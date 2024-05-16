let element = document.getElementsByClassName("box")

// Generating Random Number
function getRandomColor() {
    let a = Math.floor((0 + Math.random() * 255));
    let b = Math.floor((0 + Math.random() * 255));
    let c = Math.floor((0 + Math.random() * 255));
    return `rgb(${a}, ${b}, ${c})`
}

// Changing html collection to array to perform for each loop
Array.from(element).forEach((el) => {
    el.style.backgroundColor = getRandomColor()
    el.style.color = getRandomColor()
})
