
function upDate(element) {
    var photo = document.getElementById("image");
    photo.style.backgroundImage = "url('" + element.src + "')";
    photo.innerHTML = element.alt;
    console.log("Image updated: " + element.alt);
}


function unDo() {
    var photo = document.getElementById("image");
    photo.style.backgroundImage = "url('')";
    photo.innerHTML = "Hover over an image below to display here.";
    console.log("Image reset.");
}


function initializeGallery() {
    var images = document.querySelectorAll(".preview");
    console.log("Gallery initialized.");
    

    
    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}
