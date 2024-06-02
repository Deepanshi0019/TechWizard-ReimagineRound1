var tl = gsap.timeline();
tl.to(".slide", {
    scrollTrigger: {
        trigger: ".bestseller",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: true
    },
    xPercent: -430,
    ease:Power4
});

