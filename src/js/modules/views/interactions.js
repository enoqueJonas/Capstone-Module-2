import { postLikes, getLikes } from './interactions-api.js';

const updateLikeCount = async (parent) => {
  const likesCountElelement = parent.getElementsByTagName('span')[1];
  const likesCount = parseInt((likesCountElelement.innerHTML).split(' ')[0], 10);
  likesCountElelement.innerHTML = (likesCount === 0) ? '1 like' : `${likesCount + 1} likes`;
};

export const likePokemonAction = async (event) => {
  const parent = event.target.parentElement.parentElement.parentElement;
  const pokemonID = parseInt(parent.getElementsByTagName('span')[2].innerHTML, 10);
  postLikes(pokemonID).then(() => {
    updateLikeCount(parent);
  });
};

export const getPokemonLikes = async () => {
  const likes = await getLikes();
  return likes;
};