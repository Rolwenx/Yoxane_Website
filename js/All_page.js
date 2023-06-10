window.onload = function() {

    const navbar = document.querySelector(".nav_bar");
    const element = document.querySelector(".header_title");
    if (!window.location.href.endsWith("/home.html")) {
        const position = element.offsetTop - navbar.offsetHeight;
        window.scrollTo({top: position, behavior: "smooth"});
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Sélectionner le bouton du menu et les éléments de la barre de navigation
    const menuToggle = document.querySelector('.menu-toggle');
    const navBarElements = document.querySelector('.elements_of_navbar');
  
    // Ajouter un écouteur d'événements pour le clic sur le bouton du menu
    menuToggle.addEventListener('click', () => {
      // Basculer l'affichage des éléments de la barre de navigation
      navBarElements.classList.toggle('show');
    });

});


  
  