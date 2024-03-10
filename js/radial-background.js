export function radialBackground() {
    document.addEventListener('mousemove', (event) => {
        const xPos = event.clientX;
        const yPos = event.clientY;
    
        document.querySelector('.radial-background-desktop').style.background = `radial-gradient(400px at ${xPos}px ${yPos}px, rgba(29, 78, 216, 0.15), transparent 80%)`
    });
    
}