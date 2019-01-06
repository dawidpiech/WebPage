document.addEventListener("DOMContentLoaded", ()=>{
    let hamburger = document.querySelector(".hamburger"),
    menu = document.querySelector("nav")

    hamburger.addEventListener("click", function(){
        hamburger.classList.toggle("menu-close")
        hamburger.classList.toggle("menu-open")

        menu.classList.toggle("menu-close")
        menu.classList.toggle("menu-open")
    })
    
})