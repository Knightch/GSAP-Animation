gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
    // x: 700,
    duration: 5,
    scrollTrigger: {
        trigger: ".square",
        start: "top 30%",
        end:()=> `+=${document.querySelector(".square").offsetHeight}`,
        markers: {
            startColor: "purple",
            endColor: "fuchsia",
            fontSize: "2em",
            indent: 200
        },
        toggleClass:"red"
    }
})