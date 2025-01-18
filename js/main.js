import { radialBackground } from "./radial-background.js";
import { scrollSpy } from "./scroll-spy.js";

const innerWidth = window.innerWidth;

document.addEventListener('DOMContentLoaded', () => {
    scrollSpy();
    
    if (innerWidth > 420) {
        radialBackground();
    }

})

