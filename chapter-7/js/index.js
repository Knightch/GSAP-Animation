gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: ".box",
    start: "top 80%",
    end: "top 50%",
    markers: true,
    toggleClass: "box-red"
})