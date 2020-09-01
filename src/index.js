import { renderHomepage } from './renderHomepage';
import { renderMenuPage } from './renderMenuPage';
import { renderContactPage } from './renderContactPage';

renderHomepage();

const content = document.querySelector('#content');
content.addEventListener('click', renderPage);

function renderPage(e) {
    const classID = e.target.classList;
    if(!(classID.contains('navbutton'))) return;
    if(classID.contains('homebutton') && !(classID.contains('active'))) {
        content.innerHTML = "";
        renderHomepage();
    }
    if(classID.contains('menubutton') && !(classID.contains('active'))) {
        content.innerHTML = "";
        renderMenuPage();
    }
    if(classID.contains('contactbutton') && !(classID.contains('active'))) {
        content.innerHTML = "";
        renderContactPage();
    }
}