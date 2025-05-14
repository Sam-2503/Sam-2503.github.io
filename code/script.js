let homeButton = document.querySelector(".homeButton");
let homeContent  = document.querySelector(".home");
homeButton.onclick = () => homeContent.scrollIntoView({behaviour: "smooth"});

let contactButton = document.querySelector(".contactButton");
let contactContent = document.querySelector(".contact");
contactButton.onclick = () => contactContent.scrollIntoView({behaviour: "smooth"});

let projectsButton = document.querySelector(".projectsButton");
let projectsContent = document.querySelector(".projects");
projectsButton.onclick = () => projectsContent.scrollIntoView({behaviour: "smooth"});