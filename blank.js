// const nameElement = document.getElementById("name");
const toggleElement = document.getElementById("toggle");
const childElement = document.getElementById("child");
// let nameList = ["emmanuel", "david", "widom", "ozabor", "joshua"];



let toggle = false

toggleElement.addEventListener("click", () => {
    if (toggle) {
        toggle = false

        childElement.style = "display: block"
    } else {
        toggle = true
        childElement.style = "display: none"
    }

// })
// function randomNameGenerator() {
//     setInterval(() => {
//     const randomName = Math.random() * nameList.length
//     nameElement.textContent = nameList[Math.floor(randomName)]

//     const firstRandom = Math.floor(Math.random() * 100)
//     const secondRandom = Math.floor(Math.random() * 1000)
//     const mathLogic = firstRandom * secondRandom


//     nameElement.textContent = `Calculate:
//     ${firstRandom} * ${secondRandom} = ${mathLogic}`


//     }, 3000)
// }

// randomNameGenerator()