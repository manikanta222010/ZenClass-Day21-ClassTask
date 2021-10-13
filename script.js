let num = document.querySelector("#first").innerText

const countdown = new Promise((resolve, reject) => {
    setTimeout(() => {
        document.querySelector("#first").innerText = --num
        setTimeout(() => {
            document.querySelector("#first").innerText = --num
            setTimeout(() => {
                document.querySelector("#first").innerText = --num
                setTimeout(() => {
                    document.querySelector("#first").innerText = --num
                    setTimeout(() => {
                        document.querySelector("#first").innerText = --num
                        setTimeout(() => {
                            document.querySelector("#first").innerText = --num
                            setTimeout(() => {
                                document.querySelector("#first").innerText = --num
                                setTimeout(() => {
                                    document.querySelector("#first").innerText = --num
                                    setTimeout(() => {
                                        document.querySelector("#first").innerText = --num
                                        setTimeout(() => {
                                            resolve("Happy Independence Day")
                                        }, 1000 * 1)
                                    }, 1000 * 1)
                                }, 1000 * 1)
                            }, 1000 * 1)
                        }, 1000 * 1)
                    }, 1000 * 1)
                }, 1000 * 1)
            }, 1000 * 1)
        }, 1000 * 1)
    }, 1000 * 1);
})

countdown
    .then((msg) => {
        document.querySelector("h1").innerText = msg
    })


let num2 = document.querySelector("#second").innerText
const countdown2 = new Promise((resolve, reject) => {
    let counter = setInterval(() => {
        document.querySelector("#second").innerText = --num2
        if (num2 == 0) {
            clearInterval(counter)
            resolve("Happy Independence Day")
        }
    }, 1000 * 1)
})

countdown2
    .then((msg) => {
        document.querySelector("#second").innerText = msg
    })
