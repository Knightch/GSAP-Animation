gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
     x: 700,
    duration: 10,
    scrollTrigger: {
        trigger: ".square",
        start: "top 30%",
        end:"top 70%",
        toggleActions:"play none none none",
        //              onEnter onLeave onEnterBack onLeaveBack
        //  play pause resume reverse restart reset complete none
        markers: {
            startColor: "purple",
            endColor: "fuchsia",
            fontSize: "2em",
            indent: 200
        },
        toggleClass:"red"
    }
})