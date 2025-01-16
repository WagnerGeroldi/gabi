let btnsc01 = document.querySelector(".btn-sc-01")
let btnsc02 = document.querySelector(".btn-sc-02")
let btnsc03 = document.querySelector(".btn-sc-03")
let sc02 = document.querySelector(".sc-02")
let sc03 = document.querySelector(".sc-03")

function handleSc01() {
    btnsc01.classList.add("none")
    sc02.classList.remove("none")

}

function handleSc02() {
    btnsc02.classList.add("none")
    sc03.classList.remove("none")

}

function handleSc03() {
    btnsc03.classList.add("none")
    // sc02.classList.remove("none")
    alert("TESTE")

}