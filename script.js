const crsr = document.querySelector("#cursor");
const crsrblr = document.querySelector("#cursor-blur")
document.addEventListener('mousemove',function(dets) {
   crsr.style.left = dets.x + "px"
   crsr.style.top = dets.y + "px"
   crsrblr.style.left = dets.x -250 + "px"
   crsrblr.style.top = dets.y -200 + "px"
})


gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 3,
    height: "44px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
        //Scrub is for when we scroll up the navbar transition is based on it . like their opacity changes wrt how much we scroll up . 
    }
})

gsap.to("#main" , {
    backgroundColor : "#000",
    scrollTrigger: {
        trigger : "#main",
        scroller : "body" ,
        start :"top -30%" ,
        end :"top -100%" ,
        scrub : 2
    }
})