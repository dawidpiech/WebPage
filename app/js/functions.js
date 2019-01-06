//Function to check status load images on page
function checkImagesLoaded(imagesArray, preloaderHandle) {
    let loaded = imagesArray.length

    for (let i = 0; i < imagesArray.length; i++) {
        if (imagesArray[i].complete) {
            loaded--
        }
        else {
            imagesArray[i].addEventListener("load", () => {
                loaded--
                if (loaded === 0) {
                    allImagesLoaded(preloaderHandle)
                }
            })
        }
    }

    if (loaded === 0){
        allImagesLoaded(preloaderHandle)
    }
}

//Do something if all images is loaded
function allImagesLoaded(preloader){
    document.querySelector("body").classList.remove("load")
    preloader.classList.add("isLoaded")
}

function paralax(){
    console.log("fasf")
    document.querySelector(".section-header").style.backgroundPositionY = window.pageYOffset/4 + "px"
}