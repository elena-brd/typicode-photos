const apiURL = 'https://jsonplaceholder.typicode.com/photos';

const getItems = () => {
    fetch(apiURL + '?_limit=6')
        .then(res => res.json())
        .then(data => {
            data.forEach((item) => addItemsToDOM(item))
        })
}

const addItemsToDOM = (item) => {
    const div = document.createElement('div');
    div.classList.add('item');
    div.setAttribute('item-id', item.id);
    div.appendChild(document.createTextNode(item.title));

    document.querySelector('#items').appendChild(div);

    const img = document.createElement('img');
    img.classList.add('img-item');
    img.src = `${item.thumbnailUrl}`;

    div.appendChild(img)
}



document.addEventListener('DOMContentLoaded', getItems)