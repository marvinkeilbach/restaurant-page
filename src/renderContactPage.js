const renderContactPage = function() {
    // Creating all elements
    const container = document.querySelector('#content');

    const formHTML = 
    `<label for="name">Name</label>
    <input type="text" class="contact-input" id="name">
    <label for="email">Email</label>
    <input type="email" class="contact-input" id="email">
    <label for="message">Message</label>
    <textarea class="contact-input" id="message"></textarea>
    <input type="submit" value="Send" class="contact-input" id="submit">`

    const contactPage = document.createElement('div');
    const navbar = document.createElement('div');
    const homeButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const contactButton = document.createElement('button');
    const contactBody = document.createElement('div');
    const headline = document.createElement('h2');
    const contactContainer = document.createElement('div');
    const contactForm = document.createElement('div');
    const socialMedia = document.createElement('div');
    const socialMediaText = document.createElement('p');
    const icons = document.createElement('div');
    const twitterIcon = document.createElement('img');
    const facebookIcon = document.createElement('img');
    const instagramIcon = document.createElement('img');

    // Configuring Navbar
    homeButton.innerText = "HOME";
    menuButton.innerText = "MENU";
    contactButton.innerText = "CONTACT";
    homeButton.classList = "navbutton homebutton";
    menuButton.classList = "navbutton menubutton";
    contactButton.classList = "navbutton contactbutton active";
    navbar.classList = 'navbar';
    navbar.appendChild(homeButton);
    navbar.appendChild(menuButton);
    navbar.appendChild(contactButton);

    // Configuring headline
    headline.innerText = "Contact Us:"

    // Configuring contactForm
    contactForm.innerHTML = formHTML;
    contactForm.classList = 'contact-form'

    // Configuring Icons
    twitterIcon.setAttribute("src", "https://image.flaticon.com/icons/svg/60/60580.svg");
    facebookIcon.setAttribute("src", "https://image.flaticon.com/icons/svg/733/733603.svg");
    instagramIcon.setAttribute("src", "https://image.flaticon.com/icons/svg/1400/1400829.svg");
    icons.appendChild(twitterIcon);
    icons.appendChild(facebookIcon);
    icons.appendChild(instagramIcon);
    icons.classList = "icons";

    // Configuring socialMedia
    socialMediaText.innerText = "Find us on:";
    socialMedia.appendChild(socialMediaText);
    socialMedia.appendChild(icons);

    // Configuring contactContainer
    contactContainer.classList = "contact-container"
    contactContainer.appendChild(contactForm);
    contactContainer.appendChild(socialMedia);

    // Configuring contactBody
    contactBody.classList = "pageBody";
    contactBody.appendChild(headline);
    contactBody.appendChild(contactContainer);

    // Configuring contactPage
    contactPage.classList = 'contactpage';
    contactPage.appendChild(navbar);
    contactPage.appendChild(contactBody);

    // Bundling all into container
    container.appendChild(contactPage);
}

export { renderContactPage };