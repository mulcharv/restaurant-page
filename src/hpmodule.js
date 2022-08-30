import hprestaurant from './hprestaurant.jpg';

export function hp () {
    const hpContainer = document.createElement('div');
    hpContainer.setAttribute('id', 'hpContainer');

    const hpCopy1 = document.createElement('div');
    hpCopy1.setAttribute('id', 'hpCopy1');
    hpCopy1.textContent = `London's Premier Poke Paradise`;
    hpContainer.appendChild(hpCopy1);
    
    const hpCopy2 = document.createElement('div');
    hpCopy2.setAttribute('id', 'hpCopy2');
    hpCopy2.textContent = `Authentic recipes mastered in Hawaii and delivered to London`;
    hpContainer.appendChild(hpCopy2);


    const myRestaurant = new Image();
    myRestaurant.setAttribute('id', 'myRestaurant')
    myRestaurant.src = hprestaurant;
    hpContainer.appendChild(myRestaurant);

    const hpCopy3 = document.createElement('div');
    hpCopy3.setAttribute('id', 'hpCopy3');
    hpCopy3.textContent = `Come visit today for a bowl of paradise`;
    hpContainer.appendChild(hpCopy3);

    return hpContainer;
}
