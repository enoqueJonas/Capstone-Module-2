import apiCall from './api.js';
import Pokemon from '../models/pokemon.js';
import { getPokemonLikes } from './interactions.js';
import renderCommentPopup from './commentPopup.js';
const content = document.getElementById('content');
const createTag = (tagName, textContent = null, className = null, event = {}) => {
  const tag = document.createElement(tagName);
  tag.textContent = textContent;
  tag.className = className;
  tag.addEventListener('click', event);
  return tag;
};

const pokemonCard = (pokemon) => {
  const listItem = createTag('li', null, 'card');
  const cardImage = createTag('img', null, 'card-image');
  cardImage.src = `${pokemon.image}`;
  const titleDiv = createTag('div', null, null);
  const title = createTag('h2', `${pokemon.name}`, 'card-title');
  const likeIconContainer = createTag('span', null, 'like-icon');
  const likeIcon = createTag('i', null, 'fa fa-heart');
  likeIconContainer.appendChild(likeIcon);
  titleDiv.appendChild(title);
  titleDiv.appendChild(likeIconContainer);
  const cardSubtitle = createTag('span', `${pokemon.getLikeSentence()}`, 'card-subtitle');
  const cardID = createTag('span', `${pokemon.id}`, 'pokemon-id hidden');
  cardID.addEventListener('click', () => {
  });
  const newLigne = createTag('br', null, null);
  const commentButton = createTag('button', 'Comments', 'comment-button', renderCommentPopup);
  commentButton.id = pokemon.name;

  const rowItems = [cardImage, titleDiv, cardSubtitle, cardID, newLigne, commentButton];

  for (let j = 0; j < rowItems.length; j += 1) {
    listItem.appendChild(rowItems[j]);
  }
  return listItem;
};

const displayPokemon = () => {
  const home = createTag('ul', null, 'list');
  let likes = {};

  new Promise((resolve) => {
    resolve();
  })
    .then(() => getPokemonLikes())
    .then((res) => {
      likes = res;
      return apiCall();
    }).then((res) => {
      const result = res.results;
      result.map((result) => {
        fetch(result.url)
          .then((res) => res.json())
          .then((res) => {
            let pokemonLikes = 0;
            if (likes.length > 0) {
              const like = likes
                .filter((like) => parseInt(like.item_id, 10) === parseInt(res.id, 10));
              if (like[0]) {
                pokemonLikes = like[0].likes;
              }
            }
            const pok = new Pokemon(
              res.id,
              res.name,
              res.sprites.front_default,
              res.types.map((type) => type.type.name).join(', '),
              pokemonLikes,
            );
            const card = pokemonCard(pok);
            home.appendChild(card);
          });
        return '';
      });
    });
  return home;
};

const renderHome = async () => {
  await content.appendChild(displayPokemon());
};

export default renderHome;
