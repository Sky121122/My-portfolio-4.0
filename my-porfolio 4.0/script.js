document.addEventListener("DOMContentLoaded", (event)=>{

    var tl = gsap.timeline();

    gsap.from(".home-content .my-image",{
        y:-500,
        duration:1,
        delay:0.5
    });
    gsap.from("#Home .sf",{
        y:-250,
        duration:1.2,
        delay:0.5
    });
    gsap.from("nav",{
        width:"0vw",
        duration:1,
        delay:0.5,
    });
    gsap.from("nav .links",{
        opacity:0,
        duration:1,
        delay:1,
    })
    gsap.from(".skill-all .boxes",{
        scale:0,
        duration:1,
        stagger:0.1,
        scrollTrigger:{
            trigger:".skills",
            start:"top 70%",
            end:"top 0%",
        }
    });

    gsap.from(".project-box .project-card",{
        y:300,
        opacity:0,
        duration:1.2,
        scrollTrigger:{
            trigger:".project-box",
            start:"top 80%",
            end:"top 40%",
            scrub:0.3
        }
    });
})

