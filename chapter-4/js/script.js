gsap.registerPlugin(ScrollTrigger);
gsap.to(".text",{
    y:500,
    duration:8,
    scrollTrigger:{
        trigger:".trig",
        start:"top 50%",
        end:"top 30%",
        scrub: 4,
        markers: {
            startColor: "purple",
            endColor: "fuchsia",
            fontSize: "2em",
            indent: 200
        }
    }
})