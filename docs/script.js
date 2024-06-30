//bestseller

//pointer

var images = document.querySelectorAll(".item img")
var pointer = document.querySelector(".pointer")
images.forEach(function(image) {
    image.addEventListener("mousemove", function(dets){
        gsap.to(pointer, {
            x: dets.clientX,
            y: dets.clientY
        });
    });
    image.addEventListener("mouseenter", function(){
        gsap.to(pointer, {
            scale: 1,
            opacity: 0.8
        });
    });
    image.addEventListener("mouseleave", function(){
        gsap.to(pointer, {
            scale: 0,
            opacity: 0
        });
    });
});


// animation on scroll disables for mobile
AOS.init({disable: 'mobile'});
AOS.init({disable: 'tablet'});

 // Function to initialize Tilt.js
 function initializeTilt() {
    VanillaTilt.init(document.querySelectorAll(".card"), {
        glare: true,
        "max-glare": 0.5,
        scale: 1.1
    });
}

function checkScreenSize() {
    const tiltElements = document.querySelectorAll(".card");

    if (window.innerWidth >= 1024) { // 1024px is the breakpoint for 'lg' in Tailwind
        initializeTilt(tiltElements);
    } else {
        tiltElements.forEach((tiltElement) => {
            if (tiltElement.vanillaTilt) {
                tiltElement.vanillaTilt.destroy();
            }
        });
    }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", checkScreenSize);

// Re-check on window resize
window.addEventListener("resize", checkScreenSize);