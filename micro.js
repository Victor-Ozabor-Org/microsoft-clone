const toggleElement = document.getElementById("toggle");
const childElement = document.getElementById("child");



let showModal = false
toggleElement.addEventListener("click", () => {
    if (showModal) {
        showModal = false

        childElement.style = "display: none"
    } else {
        showModal = true
        childElement.style = "display: block"
    }

})
const togglemobileElement = document.getElementById("toggle-mobile");
const childmobileElement = document.getElementById("child-mobile");

let showList = false
togglemobileElement.addEventListener("click", () => {
    if (showList) {
        showList = false

        childmobileElement.style = "display: none"
    } else {
        showList = true
        childmobileElement.style = "display: block"
    }

})
const menuBtn = document.getElementById("menu-btn")
menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
})

const menus = document.querySelectorAll(".chevron-menu");

menus.forEach((menu) => {

    const toggle = menu.querySelector(".chevron-toggle");
    const child = menu.querySelector(".chevron-child");
    const chevron = menu.querySelector(".chevron");

    toggle.addEventListener("click", () => {

        child.classList.toggle("open");

        chevron.classList.toggle("rotate");

    });

});


// const chevron = document.querySelector(".chevron");
// chevron.addEventListener("click", () => {
//     chevron.classList.toggle("rotate")
// })

