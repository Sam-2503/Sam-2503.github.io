9-+document.addEventListener("DOMContentLoaded", function() {
    const navbarHeight = document.querySelector("nav").offsetHeight;

    function scroller(section) {
        const offset = navbarHeight-100;
        const y = section.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({
            top: y,
            behavior: "smooth"
        });
    }

    let homeButton = document.querySelector(".homeButton");
    let homeContent  = document.querySelector(".home");
    homeButton.onclick = function() {
        scroller(homeContent);
    }

    let contactButton = document.querySelector(".contactButton");
    let contactContent = document.querySelector(".contact");
    contactButton.onclick = function() {
        scroller(contactContent);
    }

    let projectsButton = document.querySelector(".projectsButton");
    let projectsContent = document.querySelector(".projects");
    projectsButton.onclick = function() {
        scroller(projectsContent);;
    
    }


})