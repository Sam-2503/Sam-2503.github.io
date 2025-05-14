let homeButton = document.querySelector(".homeButton");
let homeContent  = document.querySelector(".home");
homeButton.onclick = () => homeContent.scrollIntoView({behavior: "smooth"});

let contactButton = document.querySelector(".contactButton");
let contactContent = document.querySelector(".contact");
contactButton.onclick = () => contactContent.scrollIntoView({behavior: "smooth"});

let projectsButton = document.querySelector(".projectsButton");
let projectsContent = document.querySelector(".projects");
projectsButton.onclick = () => projectsContent.scrollIntoView({behavior: "smooth"});