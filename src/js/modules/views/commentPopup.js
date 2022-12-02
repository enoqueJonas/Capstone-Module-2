import closePng from '../../../assets/Img/close.png';
import apiCall from './api.js';
import loadMessage from './loadMessage.js';
import createCommentsSection from './commentsSection.js';
const commentsCounter = require('../commentsCounter.js');

const content = document.getElementById('content');

const renderCommentPopup = async (event) => {
  const pokname = event.target.id;
  loadMessage();
  let commentsSectionItems = await createCommentsSection(event);
  const data = await apiCall(pokname);
  const commentPopup = `
<div class="comments-popup">
<div class="top">
  <img
    src="${data.sprites.front_default}"
    alt=""
    class="pokemon-img"
    width="190px"
    Height="190px"
  />
  <img src="${closePng}" alt="" class="close-popup" width="40px" height="40px" />
</div>
<div class="middle">
  <h2 class="pokemon-name">${data.name}</h2>
  <div class="pokemon-info">
    <p class="pokemon-details pokemon-type">Type: ${data.types[0].type.name}</p>
    <p class="pokemon-details pokemon-weight">Weight: ${data.weight}</p>
    <p class="pokemon-details pokemon-slot">Slot: ${data.types[0].slot}</p>
    <p class="pokemon-details pokemon-ability">Ability: ${data.abilities[0].ability.name}</p>
  </div>
</div>
<div class="comment-section">
 <h3 class="comment-section-title">
  Comments(2)
 </h3>
 <div class="comments">
 
 </div>
</div>
<div class="add-comment">
  <h3 class="add-comment-title"> Add a comment</h3>
  <div class="comment-form">
    <input type="text" placeholder="Your name" id="name" required>
    <textarea id="insights" required>Your insights</textarea>
    <button id="btn-comment">Comment</button>
  </div>
</div>
</div>`;
  content.insertAdjacentHTML('afterend', commentPopup);

  const closePopup = document.querySelector('.close-popup');
  const commentPopupDiv = document.querySelector('.comments-popup');
  const load = document.querySelector('.load');
  const commentSectionDiv = document.querySelector('.comments');
  const btnAddComment = document.querySelector('#btn-comment');
  const nameInput = document.querySelector('#name');
  const commentTextarea = document.querySelector('#insights');

  commentSectionDiv.insertAdjacentHTML('beforeend', commentsSectionItems);
  load.classList.remove('active');

  closePopup.addEventListener('click', () => {
    commentPopupDiv.classList.add('active');
  });

  commentTextarea.addEventListener('focus', () => {
    if (commentTextarea.value === 'Your insights') {
      commentTextarea.value = ' ';
      commentTextarea.style.color = 'black';
    }
  });

  btnAddComment.addEventListener('click', async () => {
    const name = nameInput.value;
    const comment = commentTextarea.value;
    const requestBody = {
      item_id: pokname,
      username: name,
      comment,
    };
    await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rGByQlRjNLg78HbvXRhV/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
      cache: 'no-cache',
      credentials: 'same-origin',
      referrerPolicy: 'no-referrer',
    }).then((response) => response.json()).catch((err) => err);
    commentsSectionItems = await createCommentsSection(event);
    commentSectionDiv.insertAdjacentHTML('beforeend', commentsSectionItems);
    nameInput.value = ' ';
    commentTextarea.value = ' ';
  });
};

export default renderCommentPopup;