let homeButton = document.querySelector(".btn-home");
let homeContent  = document.querySelector(".home");
homeButton.onclick = () => homeContent.scrollIntoView();

let contactButton = document.querySelector(".btn-contact");
let contactContent = document.querySelector(".contact");
contactButton.onclick = () => contactContent.scrollIntoView();

let projectsButton = document.querySelector(".btn-projects");
let projectsContent = document.querySelector(".projects");
projectsButton.onclick = () => projectsContent.scrollIntoView();