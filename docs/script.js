

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


