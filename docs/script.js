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