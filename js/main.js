import { radialBackground } from "./radial-background.js";
import { scrollSpy } from "./scroll-spy.js";

const innerWidth = window.innerWidth;

document.addEventListener('DOMContentLoaded', () => {
    scrollSpy();
    
    if (innerWidth > 420) {
        radialBackground();
    }
})

document.getElementById('btn-cv').addEventListener('click', () => {
    window.open('assets/archives/Facundo_Andrean_Curriculum_Vitae.pdf', '_blank');
});
