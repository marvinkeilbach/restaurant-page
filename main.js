!function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const a=function(){const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("div"),a=document.createElement("button"),i=document.createElement("button"),c=document.createElement("button"),o=document.createElement("h1"),s=document.createElement("div"),d=document.createElement("p");a.innerText="HOME",i.innerText="MENU",c.innerText="CONTACT",a.classList="navbutton homebutton active",i.classList="navbutton menubutton",c.classList="navbutton contactbutton",n.classList="navbar",n.appendChild(a),n.appendChild(i),n.appendChild(c),o.innerText="The Golden Gate",d.innerHTML="With its romantic ambiance and superb food offering, the recently opened <span>Gateless Gate</span> invites you to savor the best of Italy in Old San Juan.<br><br> The place has a quiet, old world environment that complements perfectly the wonderful variety of traditional Italian dishes that are the main attraction in the restaurant, served by a knowledgeable and friendly staff. Starters include an array of traditional antipasto ingredients, a new twist on seafood favorites or salads. Favorites include a medley of traditional pizzas and the outstanding classics pasta menu. Delight your senses with “Brasato de cosciotto di agnello”, the traditonal “Scaloppini alla parmegiana” or the wonderful “Tonno alla putanesca”. Sofia Italian kitchen complements their fabulous menu with a genero.",d.classList="description",s.appendChild(d),s.classList="pageBody",t.classList="mainpage",t.appendChild(n),t.appendChild(o),t.appendChild(s),e.appendChild(t)};a();const i=document.querySelector("#content");i.addEventListener("click",(function(e){const t=e.target.classList;if(!t.contains("navbutton"))return;t.contains("homebutton")&&!t.contains("active")&&(i.innerHTML="",a());t.contains("menubutton")&&!t.contains("active")&&(i.innerHTML="",function(){const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("div"),a=document.createElement("button"),i=document.createElement("button"),c=document.createElement("button"),o=document.createElement("div"),s=document.createElement("h2"),d=document.createElement("div"),l=document.createElement("div");a.innerText="HOME",i.innerText="MENU",c.innerText="CONTACT",a.classList="navbutton homebutton",i.classList="navbutton menubutton active",c.classList="navbutton contactbutton",n.classList="navbar",n.appendChild(a),n.appendChild(i),n.appendChild(c),s.innerText="Food for your soul",d.innerHTML='<p class="menutext">Sundries from the south</p><img src="https://pixabay.com/get/54e0d54a4f5bac14f6da8c7dda35367b1c37d7e05655774c_1280.jpg" alt="">',l.innerHTML='<img src="https://pixabay.com/get/55e6dc444a53a814f6da8c7dda35367b1c37d7e05058774f_1280.jpg" alt="">\n    <p class="menutext">Green Smoothies</p>\n    <p class="menutext">Sweet Smoothies</p>\n    <img src="https://pixabay.com/get/55e1d2454955ad14f6d1867dda35367b1c37d7e057507349_1920.jpg" alt="">\n    <img src="https://pixabay.com/get/54e4d1434b50ab14f6da8c7dda35367b1c37d7e056507841_1280.jpg" alt="">\n    <p class="menutext">Breakfast Bowls</p></div>',d.classList="menu menu1",l.classList="menu menu2",o.classList="pageBody",o.appendChild(s),o.appendChild(d),o.appendChild(l),t.classList="menupage",t.appendChild(n),t.appendChild(o),e.appendChild(t)}());t.contains("contactbutton")&&!t.contains("active")&&(i.innerHTML="",function(){const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("div"),a=document.createElement("button"),i=document.createElement("button"),c=document.createElement("button"),o=document.createElement("div"),s=document.createElement("h2"),d=document.createElement("div"),l=document.createElement("div"),r=document.createElement("div"),u=document.createElement("p"),p=document.createElement("div"),m=document.createElement("img"),b=document.createElement("img"),h=document.createElement("img");a.innerText="HOME",i.innerText="MENU",c.innerText="CONTACT",a.classList="navbutton homebutton",i.classList="navbutton menubutton",c.classList="navbutton contactbutton active",n.classList="navbar",n.appendChild(a),n.appendChild(i),n.appendChild(c),s.innerText="Contact Us:",l.innerHTML='<label for="name">Name</label>\n    <input type="text" class="contact-input" id="name">\n    <label for="email">Email</label>\n    <input type="email" class="contact-input" id="email">\n    <label for="message">Message</label>\n    <textarea class="contact-input" id="message"></textarea>\n    <input type="submit" value="Send" class="contact-input" id="submit">',l.classList="contact-form",m.setAttribute("src","https://image.flaticon.com/icons/svg/60/60580.svg"),b.setAttribute("src","https://image.flaticon.com/icons/svg/733/733603.svg"),h.setAttribute("src","https://image.flaticon.com/icons/svg/1400/1400829.svg"),p.appendChild(m),p.appendChild(b),p.appendChild(h),p.classList="icons",u.innerText="Find us on:",r.appendChild(u),r.appendChild(p),d.classList="contact-container",d.appendChild(l),d.appendChild(r),o.classList="pageBody",o.appendChild(s),o.appendChild(d),t.classList="contactpage",t.appendChild(n),t.appendChild(o),e.appendChild(t)}())}))}]);