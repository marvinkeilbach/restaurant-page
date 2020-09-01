const renderHomepage = function() {
    // Creating all elements
    const container = document.querySelector('#content');

    const text = "With its romantic ambiance and superb food offering, the recently opened <span>Golden Gate</span> invites you to savor the best of Italy in Old San Juan.<br><br> The place has a quiet, old world environment that complements perfectly the wonderful variety of traditional Italian dishes that are the main attraction in the restaurant, served by a knowledgeable and friendly staff. Starters include an array of traditional antipasto ingredients, a new twist on seafood favorites or salads. Favorites include a medley of traditional pizzas and the outstanding classics pasta menu. Delight your senses with \“Brasato de cosciotto di agnello\”, the traditonal \“Scaloppini alla parmegiana\” or the wonderful \“Tonno alla putanesca\”. Sofia Italian kitchen complements their fabulous menu with a genero."

    const mainPage = document.createElement('div');
    const navbar = document.createElement('div');
    const homeButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const contactButton = document.createElement('button');
    const headline = document.createElement('h1');
    const descriptionBody = document.createElement('div');
    const descriptionParagraph = document.createElement('p');
    
    // Configuring Navbar
    homeButton.innerText = "HOME";
    menuButton.innerText = "MENU";
    contactButton.innerText = "CONTACT";
    homeButton.classList = 'navbutton homebutton active';
    menuButton.classList = 'navbutton menubutton';
    contactButton.classList = 'navbutton contactbutton';
    navbar.classList = 'navbar';
    navbar.appendChild(homeButton);
    navbar.appendChild(menuButton);
    navbar.appendChild(contactButton);

    // Configuring Headline
    headline.innerText = "The Golden Gate";

    // Configuring Description
    descriptionParagraph.innerHTML = text;
    descriptionParagraph.classList = "description";
    descriptionBody.appendChild(descriptionParagraph);
    descriptionBody.classList = "pageBody";

    // Configuring Mainpage
    mainPage.classList = 'mainpage';
    mainPage.appendChild(navbar);
    mainPage.appendChild(headline);
    mainPage.appendChild(descriptionBody);

    // Bundling all into container
    container.appendChild(mainPage);
}

export { renderHomepage };