// var tl = gsap.timeline();
// tl.to(".slide", {
//     scrollTrigger: {
//         trigger: ".bestseller",
//         start: "top top",
//         end: "bottom bottom",
//         scrub: 1,
//         pin: index === slides.length - 1 ? false : true
//     },
//     xPercent: -430,
//     ease:Power4
// });

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const slides = document.querySelectorAll('.slide');
const slideWidthIncrement = 40; // Increment width by 40% based on your needs

// Function to change slide widths on scroll
function changeWidths() {
    const scrollPosition = window.scrollY;

    slides.forEach((slide, index) => {
        const slideStart = index * window.innerHeight;
        const slideEnd = (index + 1) * window.innerHeight;

        if (scrollPosition >= slideStart && scrollPosition <= slideEnd) {
            const relativeScroll = scrollPosition - slideStart;
            const newWidth = 60 + (relativeScroll / window.innerHeight) * slideWidthIncrement;
            slide.style.width = newWidth + '%';
        } else if (scrollPosition > slideEnd) {
            slide.style.width = (60 + slideWidthIncrement) + '%';
        } else {
            slide.style.width = '60%';
        }
    });
}

// Initialize GSAP animations for each slide
slides.forEach((slide, index) => {
    gsap.timeline({
        scrollTrigger: {
            trigger: slide,
            start: "top center",
            end: "bottom center",
            scrub: true,
            onUpdate: changeWidths
        }
    });
});

// Horizontal scrolling for the entire slider
gsap.to(".slider", {
    xPercent: -((slides.length - 1) * 100),
    ease: "none",
    scrollTrigger: {
        trigger: ".cont",
        pin: true,
        scrub: true,
        end: `+=${slides.length * window.innerHeight}`
    }
});

// Event listener for scroll to trigger width change
window.addEventListener('scroll', function() {
    requestAnimationFrame(changeWidths);
});


// function changeWidths() {
//     const slides = document.querySelectorAll('.slide');
//     const scrollPosition = window.scrollY;
//     const slideWidthIncrement = 30; // Increment width by 40% based on your needs

//     slides.forEach((slide, index) => {
//         const slideStart = index * window.innerHeight;
//         const slideEnd = (index + 1) * window.innerHeight;

//         if (scrollPosition >= slideStart && scrollPosition <= slideEnd) {
//             const relativeScroll = scrollPosition - slideStart;
//             const newWidth = 50 + (relativeScroll / window.innerHeight) * slideWidthIncrement;
//             slide.style.width = newWidth + '%';
//         } else if (scrollPosition > slideEnd) {
//             slide.style.width = (50 + slideWidthIncrement) + '%';
//         } else {
//             slide.style.width = '50%';
//         }
//     });
// }

// window.addEventListener('scroll', function() {
//     requestAnimationFrame(changeWidths);
// });
