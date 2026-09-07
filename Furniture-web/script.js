const menu = document.querySelector("#menu")
const list = document.querySelector("#list")
const bars = document.querySelector(".fa-bars")

menu.addEventListener("click", ()=>{
    list.classList.toggle("nav-list-active")
    bars.classList.toggle("fa-marks")
})