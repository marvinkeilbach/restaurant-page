const renderMenuPage = function() {
    // Creating all elements
    const container = document.querySelector('#content');

    const menu1Content = 
    `<p class="menutext">Sundries from the south</p><img src="./images/sundries.jpg" alt="">`
    const menu2Content = 
    `<img src="./images/green-smoothies.jpg" alt="">
    <p class="menutext">Green Smoothies</p>
    <p class="menutext">Sweet Smoothies</p>
    <img src="https://images.unsplash.com/photo-1507120366498-4656eaece7fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80" alt="">
    <img src="https://images.unsplash.com/photo-1536184071535-78906f7172c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2020&q=80" alt="">
    <p class="menutext">Breakfast & Brunch</p></div>`

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