const Parallax = document.getElementById("PX");
window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    Parallax.style.backgroundPositionY = -250 + offset*0.25 + "px";

})



const ParallaxH = document.getElementsByClassName("PXH");
const calendar = document.getElementById("calendargrid")
window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    for (i = 0; i < ParallaxH.length; i++) {
        if (i >= 1 && i < 2) {
            ParallaxH[i].style.backgroundPositionX = -1200 + offset*0.7 + "px";
        } else if (i>=2) {
            ParallaxH[i].style.backgroundPositionX = -100 + -offset*0.2 + "px";
        } else {
            ParallaxH[i].style.backgroundPositionX = 120 + -offset*0.2 + "px";
        }
        
    }
    calendar.style.backgroundPositionX = -225 + offset*1.6+ "px";
})


