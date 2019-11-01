// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response)
        for(let article in response.data.articles) { 
            response.data.articles[article].forEach(item =>{ 
             cardsContainer.appendChild(createCard(item)); 
            }) 
         }
    })
    .catch(error => {
        console.log('Data not returned!', error)
    })


function createCard(object){
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    const authorName = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imageContainer.classList.add('img-container');

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imageContainer);
    author.appendChild(authorName);
    imageContainer.appendChild(image);

    headline.textContent = object.headline;
    authorName.textContent = `By: ${object.authorName}`;
    image.src = object.authorPhoto;

    return card;

}