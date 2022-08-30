import location from './location.jpg';
import clock from './clock-time-three.svg';
import bell from './bell-ring.svg';
import house from './home.svg';
import message from './message-reply.svg';

export function cp () {
    const cpContainer = document.createElement('div');
    cpContainer.setAttribute('id', 'cpContainer');

    const phone = document.createElement('div');
    phone.setAttribute('id', 'phone');
    phone.setAttribute('class', 'info');
    cpContainer.appendChild(phone);

    const phonepic = new Image();
    phonepic.setAttribute('id', 'phonepic');
    phonepic.src = bell;
    phone.appendChild(phonepic);

    const phonetext = document.createElement('div');
    phonetext.setAttribute('id', 'phonetext');
    phonetext.textContent = '013-579-1113';
    phone.appendChild(phonetext);

    const home = document.createElement('div');
    home.setAttribute('id', 'home');
    home.setAttribute('class', 'info');
    cpContainer.appendChild(home);

    const homepic = new Image();
    homepic.setAttribute('id', 'homepic');
    homepic.src = house;
    home.appendChild(homepic);

    const hometext = document.createElement('div');
    hometext.setAttribute('id', 'hometext');
    hometext.textContent = 'Stall 14, Borough Market, 8 Southwark St, London';
    home.appendChild(hometext);

    const email = document.createElement('div');
    email.setAttribute('id', 'email');
    email.setAttribute('class', 'info');
    cpContainer.appendChild(email);

    const emailpic = new Image();
    emailpic.setAttribute('id', 'emailpic');
    emailpic.src = message;
    email.appendChild(emailpic);

    const emailtext = document.createElement('div');
    emailtext.setAttribute('id', 'emailtext');
    emailtext.textContent = 'Poke@BowlingForPoke.com';
    email.appendChild(emailtext);

    const hours = document.createElement('div');
    hours.setAttribute('id', 'hours');
    hours.setAttribute('class', 'info');
    cpContainer.appendChild(hours);

    const hourspic = new Image();
    hourspic.setAttribute('id', 'hourspic');
    hourspic.src = clock;
    hours.appendChild(hourspic);

    const hourstext = document.createElement('div');
    hourstext.setAttribute('id', 'hourstext');
    hourstext.textContent = 'Mon-Saturday: 10AM - 5PM';
    hours.appendChild(hourstext);

    const map = document.createElement('div');
    map.setAttribute('id', 'map');
    map.setAttribute('class', 'info')
    cpContainer.appendChild(map);

    const mappic = new Image();
    mappic.setAttribute('id', 'mappic');
    mappic.src = location;
    map.appendChild(mappic);

    return cpContainer;

}