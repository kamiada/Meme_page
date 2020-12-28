//http://apimeme.com/meme?meme=Advice-Doge&top=Much+sense&bottom=Much+love

// fetch('https://dog.ceo/api/breed/bulldog/images/random/50')
fetch('http://alpha-meme-maker.herokuapp.com/1')
.then(response => response.json())
.then(data=> data.message.map(pic => {
    const body = document.querySelector('body');
    const image = document.createElement('img');
    image.src = pic;
    body.append(image)
    console.log(pic)
}))
.catch(error => console.error(error))