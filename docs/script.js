//bestseller
var tl = gsap.timeline({scrollTrigger:{
    trigger:".bestsellers",
    // markers:true,
    start:"38% 50%",
    end:"100% 50%",
    scrub:2,
    pin:true
}});
tl
.to(".text",{
    top: "-30%",
},'a')
.to("#card-one",{
    top: "35%",
},'a')
.to("#card-two",{
    top: "100%"
},'a')
.to("#card-two",{
    top: "45%"
},'b')
.to("#card-one",{
    width: "65%",
    height: "65vh"
},'b')
.to("#card-three",{
    top: "100%"
}, 'b')
.to("#card-three",{
    top: "50%"
}, 'c')
.to("#card-two",{
    width: "70%",
    height: "70vh"
},'c')
.to("#card-four",{
    top: "100%"
},'c')
.to("#card-four",{
    top: "57%"
},'d')
.to("#card-three",{
    width: "75%",
    height: "75vh"
},'d')

//cursor
var bestsellers = document.querySelector(".bestsellers");
var cards = document.querySelectorAll(".cards");
var cursor = document.querySelector(".cursor");

cards.forEach(function(card) {
    card.addEventListener("mousemove", function(dets){
        gsap.to(cursor, {
            x: dets.clientX,
            y: dets.clientY
        });
    });
    card.addEventListener("mouseenter", function(){
        gsap.to(cursor, {
            scale: 1,
            opacity: 0.8
        });
    });
    card.addEventListener("mouseleave", function(){
        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        });
    });
});

var images = document.querySelectorAll(".item img")
var pointer = document.querySelector(".pointer")
var icons = document.querySelectorAll(".item i")
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