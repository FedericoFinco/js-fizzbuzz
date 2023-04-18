var conta = 0

for (let i = 0; i < 100; i++) {
    conta = (i + 1)
    if (conta % 3 == 0) {
        if (conta % 5 == 0) {
            conta = ("fizz buzz")
        }
        else {
            conta = ("fizz")
        }

        // console.log("fizz")
        // console.log(conta)
    }
    if (conta % 5 == 0) {
        conta = ("buzz")
    }
    console.log(conta)

    const container = document.getElementById("gabbia")
    container.innerHTML += ` <div class="box"><div class="innerBox">${conta}</div></div>`
}


// console.log(conta)
    // else {
    //     console.log(conta)
    // }
