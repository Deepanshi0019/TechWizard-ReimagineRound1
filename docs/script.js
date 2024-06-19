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

const itemCont = document.querySelector(".item-cont")
firstItem = itemCont.querySelectorAll("item")[0];
arrowIcons = document.querySelectorAll(".slider i")

let firstItmWidth = firstItem.clientWidth 

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        itemCont.scrollLeft += icon.id == "left" ? -firstItmWidth : firstItmWidth;
    })
})

let isDragStart = false, prevPageX, prevScrollLeft;
const DragStart = () => {
    isDragStart = true;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    itemCont.scrollLeft = e.pageX;
}

const dragStop = () => {
    isDragStart = false;
}

itemCont.addEventListener("mousedown", DragStart);
itemCont.addEventListener("mousemove", dragging);
itemCont.addEventListener("mouseup", dragStop);

// animation on scroll disables for mobile
AOS.init({disable: 'mobile'});