const renderMenuPage = function() {
    // Creating all elements
    const container = document.querySelector('#content');

    const menu1Content = 
    `<p class="menutext">Sundries from the south</p><img src="https://pixabay.com/get/54e0d54a4f5bac14f6da8c7dda35367b1c37d7e05655774c_1280.jpg" alt="">`
    const menu2Content = 
    `<img src="https://pixabay.com/get/55e6dc444a53a814f6da8c7dda35367b1c37d7e05058774f_1280.jpg" alt="">
    <p class="menutext">Green Smoothies</p>
    <p class="menutext">Sweet Smoothies</p>
    <img src="https://pixabay.com/get/55e1d2454955ad14f6d1867dda35367b1c37d7e057507349_1920.jpg" alt="">
    <img src="https://pixabay.com/get/54e4d1434b50ab14f6da8c7dda35367b1c37d7e056507841_1280.jpg" alt="">
    <p class="menutext">Breakfast Bowls</p></div>`

    const menuPage = document.createElement('div');
    const navbar = document.createElement('div');
    const homeButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const contactButton = document.createElement('button');
    const menuBody = document.createElement('div');
    const headline = document.createElement('h2');
    const menu1 = document.createElement('div');
    const menu2 = document.createElement('div');

    // Configuring Navbar
    homeButton.innerText = "HOME";
    menuButton.innerText = "MENU";
    contactButton.innerText = "CONTACT";
    homeButton.classList = "navbutton homebutton";
    menuButton.classList = "navbutton menubutton active";
    contactButton.classList = "navbutton contactbutton";
    navbar.classList = 'navbar';
    navbar.appendChild(homeButton);
    navbar.appendChild(menuButton);
    navbar.appendChild(contactButton);

    // Configuring headline
    headline.innerText = "Food for your soul"

    // Configuring menus
    menu1.innerHTML = menu1Content;
    menu2.innerHTML = menu2Content;
    menu1.classList = "menu menu1";
    menu2.classList = "menu menu2";

    // Configuring Menubody
    menuBody.classList = "pageBody";
    menuBody.appendChild(headline);
    menuBody.appendChild(menu1);
    menuBody.appendChild(menu2);

    // Configuring Menupage
    menuPage.classList = 'menupage';
    menuPage.appendChild(navbar);
    menuPage.appendChild(menuBody);

    // Bundling all into container
    container.appendChild(menuPage);
}

export { renderMenuPage };