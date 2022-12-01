import apiCall from './api.js';
import Pokemon from '../models/pokemon.js';

const content = document.getElementById('content');
const pokemonCard = (pokemon) => {
  let res = '';
  res += `
  <li class="card">
      <img class="card-image" src="${pokemon.image}"/>
      <div>
        <h2 class="card-title">${pokemon.name}</h2>
        <span><i class="fa fa-user"></i></span>
      </div> 
      <span class="card-subtitle">${pokemon.getLikeSentence()} </span></br>
      <button class="button">Comments</button>
  </li>
  `;
  return res;
};
const displayPokemon = () => {
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
          content.insertAdjacentHTML('beforeend', pokemonCard(pok));
        });
      return '';
    });
  });
};
const renderHome = () => {
  content.insertAdjacentHTML('beforeend', displayPokemon());
};

export default renderHome;
