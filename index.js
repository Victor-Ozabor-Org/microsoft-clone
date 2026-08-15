window.addEventListener("DOMContentLoaded", () => {
    // const userName = prompt("Welcome! Enter your name:");
    // if (userName) {
    //     alert(`Hi ${userName}, thanks for visiting my portfolio!`);
    // }

    // let bitcoinPriceElement = document.getElementById("bitcoinPrice")
    // let emojiElement = document.getElementById("emojiBlock")
    // emojiElement.style.fontSize = "100px"
    // bitcoinPriceElement.style.color = 'green'    

    // console.log(bitcoinPriceElement)

    // let beforeBtcPrice = Math.random() * (10000 - 500) + 500
    // bitcoinPriceElement.textContent = beforeBtcPrice



    // setInterval(() => {
    //     let afterBtcPrice = Math.random() * (10000 - 500) + 500
    //     bitcoinPriceElement.textContent = afterBtcPrice

    //     if(afterBtcPrice >  beforeBtcPrice) {
    //         bitcoinPriceElement.style.color = 'green'
    //         emojiElement.textContent = '😆'

    //     }else {
    //         bitcoinPriceElement.style.color = 'red'
    //         emojiElement.textContent = '😭'
    //     }
    // }, 1000)// 1 sec = 1000 milliseconds 
            // 5 sec = 5000 milliseconds




    const form = document.getElementById("contactform");
    const formResult = document.getElementById("formResult");


    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById('message').value.trim();

        console.log(name)


        console.log(email)

        console.log(message)
        if (name === "" || email === "" || message === "") {
            formResult.style.color = "red";
            formResult.textContent = "please fill in all fields!";
            return
        }

        formResult.style.color = "green";
        formResult.textContent = `Thanks ${name} Your message has been received.`;


        form.reset()

    })
})
