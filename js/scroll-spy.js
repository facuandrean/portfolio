export function scrollSpy() {

    const sections = document.querySelectorAll(".section");
    const navbarLinks = document.querySelectorAll(".scroll-spy a");
  
    window.addEventListener("scroll", function() {
        let current = "";
    
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            let scroll = 0;
            
            if (window.scrollY <= 1500) {
                scroll = 0.1;
            } else {
                scroll = 0.5;
            }

            if (sectionTop <= window.innerHeight * scroll) {
                current = section.getAttribute("id");
            }

        });
    
        navbarLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").slice(1) === current) {
                link.children[0].classList.add("active");
            } else {
                link.children[0].classList.remove("active");
                link.children[0].style.transition = "all .5s ease"
            }
        });
    });
};
