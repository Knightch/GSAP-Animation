gsap.registerPlugin(ScrollTrigger);


const tl = gsap.timeline({

    scrollTrigger: {
        trigger: ".box",
        markers: true,
        start: "top 80%",
        end: "top 30%",
        scrub: 1
    }
});

tl.to(".box", {
    x: 1240,
    duration: 10
})