window.addEventListener("load", function () {
    const placeholder = document.querySelector(".slideshow-placeholder");
    const slideshowImages = document.querySelectorAll(".slideshow img");

    // Preload all slideshow images
    let imagesLoaded = 0;
    slideshowImages.forEach((img) => {
        if (img.complete) {
            imagesLoaded++;
        } else {
            img.onload = () => {
                imagesLoaded++;
                if (imagesLoaded === slideshowImages.length) {
                    removePlaceholder();
                }
            };
        }
    });

    // Remove placeholder after all images are loaded
    function removePlaceholder() {
        if (placeholder) {
            placeholder.style.opacity = "0";
            setTimeout(() => placeholder.remove(), 500); // Remove after fade-out
        }
    }

    // Safety: Remove placeholder if images fail to load within 2 seconds
    setTimeout(removePlaceholder, 2000);
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}