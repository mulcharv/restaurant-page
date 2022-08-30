import chickenpoke from './chickenpoke.jpg';
import avocadopoke from './avocadopoke.jpg';
import salmonpoke from './salmonpoke.jpg';
import falafelpoke from './falafelpoke.jpg';
import tunapoke from './tunapoke.jpg';
import spicysalmon from './spicysalmon.jpg';

export function mp () {
    const mpContainer = document.createElement('div');
    mpContainer.setAttribute('id', 'mpContainer');

    const item1 = document.createElement('div');
    item1.setAttribute('id', 'item1');
    item1.setAttribute('class', 'items');
    mpContainer.appendChild(item1);

    const item1pic = new Image();
    item1pic.setAttribute('id', 'item1pic');
    item1pic.src = chickenpoke;
    item1.appendChild(item1pic);

    const item1title = document.createElement('div');
    item1title.setAttribute('id', 'item1title');
    item1title.textContent = 'Chicken Poke: £10';
    item1.appendChild(item1title);

    const item2 = document.createElement('div');
    item2.setAttribute('id', 'item2');
    item2.setAttribute('class', 'items');
    mpContainer.appendChild(item2);

    const item2pic = new Image();
    item2pic.setAttribute('id', 'item2pic');
    item2pic.src = avocadopoke;
    item2.appendChild(item2pic);

    const item2title = document.createElement('div');
    item2title.setAttribute('id', 'item2title');
    item2title.textContent = 'Avocado Poke: £8';
    item2.appendChild(item2title);

    const item3 = document.createElement('div');
    item3.setAttribute('id', 'item3');
    item3.setAttribute('class', 'items');
    mpContainer.appendChild(item3);

    const item3pic = new Image();
    item3pic.setAttribute('id', 'item3pic');
    item3pic.src = salmonpoke;
    item3.appendChild(item3pic);

    const item3title = document.createElement('div');
    item3title.setAttribute('id', 'item3title');
    item3title.textContent = 'Salmon Poke: £11';
    item3.appendChild(item3title);

    const item4 = document.createElement('div');
    item4.setAttribute('id', 'item4');
    item4.setAttribute('class', 'items');
    mpContainer.appendChild(item4);

    const item4pic = new Image();
    item4pic.setAttribute('id', 'item4pic');
    item4pic.src = falafelpoke;
    item4.appendChild(item4pic);

    const item4title = document.createElement('div');
    item4title.setAttribute('id', 'item4title');
    item4title.textContent = 'Falafel Poke: £9';
    item4.appendChild(item4title);

    const item5 = document.createElement('div');
    item5.setAttribute('id', 'item5');
    item5.setAttribute('class', 'items');
    mpContainer.appendChild(item5);

    const item5pic = new Image();
    item5pic.setAttribute('id', 'item5pic');
    item5pic.src = tunapoke;
    item5.appendChild(item5pic);

    const item5title = document.createElement('div');
    item5title.setAttribute('id', 'item5title');
    item5title.textContent = 'Tuna Poke: £10';
    item5.appendChild(item5title);
    
    const item6 = document.createElement('div');
    item6.setAttribute('id', 'item6');
    item6.setAttribute('class', 'items');
    mpContainer.appendChild(item6);

    const item6pic = new Image();
    item6pic.setAttribute('id', 'item6pic');
    item6pic.src = spicysalmon;
    item6.appendChild(item6pic);

    const item6title = document.createElement('div');
    item6title.setAttribute('id', 'item6title');
    item6title.textContent = 'Spicy Salmon Poke: £12';
    item6.appendChild(item6title);

    return mpContainer;

}
