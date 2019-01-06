document.addEventListener("DOMContentLoaded", () => {
    let hamburger = document.querySelector(".hamburger"),
        menu = document.querySelector("nav"),
        preloader = document.querySelector(".preloader-body"),
        img = document.querySelectorAll("img")

    //Hamburger animation   
    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("menu-close")
        hamburger.classList.toggle("menu-open")

        menu.classList.toggle("menu-close")
        menu.classList.toggle("menu-open")
    })

    //Init animations
    AOS.init();

    //refresh all offsets when device orientation is changed
    window.addEventListener("orientationchange", AOS.refresh)
    window.addEventListener("scroll", paralax)

    //Check if all photos are loaded
    setTimeout(() => {
        checkImagesLoaded(img, preloader)
    }, 1000);

})



