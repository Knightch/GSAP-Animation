gsap.registerPlugin(ScrollTrigger);

gsap.to(".sqaure", {
    duration: 8,
    scrollTrigger: {
        trigger: ".square2",
        start: "top 80%",
        end: "top 20%",
        scrub: 4,
        pin: ".sqaure",
        pinSpacing: true,
        markers: {
            startColor: "purple",
            endColor: "fuchsia",
            fontSize: "3rem"
        }
    }
})