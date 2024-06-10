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

//animations
var tl = gsap.timeline();
// tl.from(".lft h1, .lft h3",{
//     x:100,
//     opacity:0,
//     delay:0.5,
//     duration:0.9,
//     stagger:0.3,
//     scrollTrigger:{
//         trigger:".lft h1, .lft h3",
//         scroller:"body",
//         start:"top top",
//         end:"bottom bottom",
//         scrub:2
//     }
// })
// tl.from(".rgt .item",{
//     y:50,
//     opacity:0,
//     delay:0.3,
//     duration:0.4,
//     stagger:0.3,
//     scrollTrigger:{
//         trigger:".lft h1, .lft h3",
//         scroller:"body",
//         start:"top top",
//         end:"bottom bottom",
//         scrub:2
//     }
// })
