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

//animations
// var tl = gsap.timeline();
// tl.from(".lft h1, .lft h3",{
//     x:100,
//     opacity:0,
//     delay:0.5,
//     duration:0.9,
//     stagger:0.3,
//     scrollTrigger:{
//         trigger:".lft h1, .lft h3",
//         scroller:"body",
//         start:"top -1%",
//         end:"top 80%",
//         scrub:3,
//         // markers: true
//     }
// })
// tl.from(".rgt .item",{
//     y:50,
//     opacity:0,
//     delay:0.3,
//     duration:0.6,
//     stagger:0.5,
//     scrollTrigger:{
//         trigger:".lft h1, .lft h3",
//         scroller:"body",
//         start:"top 0%",
//         end:"top 80%",
//         scrub:3,
//         // markers: true
//     }
// })
// tl.from(".bestseller h1, .bestseller h4",{
//     y:60,
//     opacity:0,
//     // delay:0.3,
//     duration:0.6,
//     stagger:0.5,
//     scrollTrigger:{
//         trigger:".bestseller h1, .bestseller h4",
//         scroller:"body",
//         start:"top 50%",
//         end:"top 80%",
//         scrub:2,
//         // markers: true
//     }
// })
// tl.from(".cont .box",{
//     y:30,
//     opacity:0,
//     delay:0.6,
//     duration:0.6,
//     stagger:0.5,
//     scrollTrigger:{
//         trigger:".bestseller .cont",
//         scroller:"body",
//         start:"top 50%",
//         end:"top 80%",
//         scrub:2,
//         // markers: true
//     }
// })
