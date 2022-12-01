import apiCall from './api.js';
import Pokemon from '../models/pokemon.js';

const content = document.getElementById('content');

const createTag = (tagName, textContent = null, className = null) => {
  const tag = document.createElement(tagName);
  tag.textContent = textContent;
  tag.className = className;
  return tag;
};

const pokemonCard = (pokemon) => {
  const listItem = createTag('li', null, 'card');
  const cardImage = createTag('img', null, 'card-image');
  cardImage.src = `${pokemon.image}`;
  const titleDiv = createTag('div', null, null);
  const title = createTag('h2', `${pokemon.name}`, 'card-title');
  const likeIconContainer = createTag('span', null, 'like-icon');
  const likeIcon = createTag('i', null, 'fa fa-user');
  likeIconContainer.appendChild(likeIcon);
  titleDiv.appendChild(title);
  titleDiv.appendChild(likeIconContainer);
  const cardSubtitle = createTag('span', `${pokemon.getLikeSentence()}`, 'card-subtitle');
  const newLigne = createTag('br', null, null);
  const commentButton = createTag('button', 'Comments', 'comment-button');

  const rowItems = [cardImage, titleDiv, cardSubtitle, newLigne, commentButton];

  for (let j = 0; j < rowItems.length; j += 1) {
    listItem.appendChild(rowItems[j]);
  }
  return listItem;
};

const displayPokemon = () => {
  const home = createTag('ul', null, 'list');
  apiCall().then((res) => {
    const result = res.results;
    result.map((result) => {
      fetch(result.url)
        .then((res) => res.json())
        .then((res) => {
          const pok = new Pokemon(
            res.id,
            res.name,
            res.sprites.front_default,
            res.types.map((type) => type.type.name).join(', '),
          );
          const card = pokemonCard(pok);
          home.appendChild(card);
        });
      return '';
    });
  });
  return home;
};

const renderHome = () => {
  content.appendChild(displayPokemon());
};

export default renderHome;
