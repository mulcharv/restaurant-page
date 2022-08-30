
import {hp} from './hpmodule.js';
import {mp} from './menumodule.js';
import {cp} from './contactmodule.js';
import './style.css';



function component() {
    const main = document.createElement('div');
    main.setAttribute('id', 'main');

    const navBlock = document.createElement('div');
    navBlock.setAttribute('id', 'navBlock');
    main.appendChild(navBlock);

    const title = document.createElement('div');
    title.setAttribute('id', 'title')
    title.textContent = 'Bowling For Poke';
    navBlock.appendChild(title);

    const tabBlock = document.createElement('div');
    tabBlock.setAttribute('id', 'tabBlock');
    navBlock.appendChild(tabBlock);

    const homeTab = document.createElement('button');
    homeTab.setAttribute('id', 'homeTab');
    homeTab.textContent = 'Home';
    tabBlock.appendChild(homeTab);

    const menuTab = document.createElement('button');
    menuTab.setAttribute('id', 'menuTab');
    menuTab.textContent = 'Menu';
    tabBlock.appendChild(menuTab);

    const contactTab = document.createElement('button');
    contactTab.setAttribute('id', 'contactTab');
    contactTab.textContent = 'Contact';
    tabBlock.appendChild(contactTab);

    const tabContent = document.createElement('div');
    tabContent.setAttribute('id', 'tabContent');
    main.appendChild(tabContent);

    const homediv = document.createElement('div');
    homediv.setAttribute('id', 'homediv');
    tabContent.appendChild(homediv);
    homediv.appendChild(hp());
    
    const menudiv = document.createElement('div');
    menudiv.setAttribute('id', 'menudiv');
    tabContent.appendChild(menudiv);

    const contactdiv = document.createElement('div');
    contactdiv.setAttribute('id', 'contactdiv');
    tabContent.appendChild(contactdiv);

    homeTab.addEventListener('click', () => {
        if (homediv.childNodes.length == 0) {
            menudiv.innerHTML = '';
            contactdiv.innerHTML = '';
            homediv.appendChild(hp());
        }
    })

    menuTab.addEventListener('click', () => {
        if (menudiv.childNodes.length == 0) {
            homediv.innerHTML = '';
            contactdiv.innerHTML = '';
            menudiv.appendChild(mp());
        }
    })

    contactTab.addEventListener('click', () => {
        if (contactdiv.childNodes.length == 0) {
            homediv.innerHTML = '';
            menudiv.innerHTML = '';
            contactdiv.appendChild(cp());
        }
    })

    return main;
}

document.body.appendChild(component());