
// Smooth background color transition
// const sections = document.querySelectorAll("main > div");
// const sectionColors = {
//     "Category-section": "#222222",
//     "The-press": "#000000",
//     "third-section": "#fefcbf"
// };

// sections.forEach(section => {
//     ScrollTrigger.create({
//         trigger: section,
//         start: "top 50%",
//         end: "bottom 50%",
//         onEnter: () => gsap.to("body", { backgroundColor: sectionColors[section.id], duration: 1 }),
//         onEnterBack: () => gsap.to("body", { backgroundColor: sectionColors[section.id], duration: 1 })
//     });
// });

// Horizontal scrolling animation
gsap.to("#News-Div", {
    x: () => -(document.querySelector("#News-Div").scrollWidth - document.documentElement.clientWidth) + "px",
    ease: "none",
    scrollTrigger: {
        trigger: "#The-press",
        start: "top top",
        end: () => "+=" + document.querySelector("#News-Div").scrollWidth,
        scrub: true,
        pin: "#The-press",
        anticipatePin: 1,
    }
});

