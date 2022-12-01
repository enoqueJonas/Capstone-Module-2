const apiCall = require('./views/api.js')
import closePng from '../../assets/Img/close.png'

const renderCommentPopup = async (pokemonName = " ") => {
  const data = await apiCall(pokemonName);
  const commentPopup = `
<div class="comments-popup">
<div class="top">
  <img
    src="${data.sprites.front_default}"
    alt=""
    class="pokemon-img"
    width="220px"
    Height="220px"
  />
  <img src="${closePng}" alt="" class="close-popup" width="40px" height="40px" />
</div>
<div class="middle">
  <h2 class="pokemon-name">Pok Name</h2>
  <div class="pokemon-info">
    <p class="pokemon-details pokemon-type">Type: ${data.types[0].type.name}</p>
    <p class="pokemon-details pokemon-weight">Weight: ${data.weight}</p>
    <p class="pokemon-details pokemon-slot">Slot: ${data.types[0].slot}</p>
    <p class="pokemon-details pokemon-ability">Ability: ${data.abilities[0].ability.name}</p>
  </div>
</div>
</div>`;
  document.body.insertAdjacentHTML('afterend', commentPopup)
}

export default renderCommentPopup;