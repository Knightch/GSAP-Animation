gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
    x: 700,
    y:600,
    duration: 10,
    // opacity:0,
    borderRadius:50,
    scrollTrigger: ".div2"
})