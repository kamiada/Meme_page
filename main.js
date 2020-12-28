//http://apimeme.com/meme?meme=Advice-Doge&top=Much+sense&bottom=Much+love

//on click event - depending to what user picked from the menu, load this on the page
const apiDogs = 'https://dog.ceo/api/breed/bulldog/images/random/50';
const apiMemes = 'http:find me some good meme API pls';

function whatToLoad(menuItem) {
    const pictures = document.querySelector('img');
    if (typeof (pictures) != 'undefined' && pictures != null) {
        location.reload();
    }
    if (menuItem === 'Dogs') {
        return fetchData(apiDogs);
    }
    if (menuItem === 'Memes') {
        return fetchData(apiMemes);
    }
    return fetchData(apiMemes);
}

function fetchData(apiToCall) {
    return fetch(apiToCall)
        .then(response => response.json())
        .then(data => data.message.map(pic => {
            const body = document.querySelector('body');
            const image = document.createElement('img');
            image.src = pic;
            body.append(image)
            console.log(pic)
        }))
        .catch(error => console.error(error));
}