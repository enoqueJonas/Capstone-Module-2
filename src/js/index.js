import renderHome from './modules/views/home.js';
import '../assets/css/style.css';
import renderHeader from './modules/views/header.js';
import renderCommentPopup from './modules/commentPopup.js';

const closePopup = document.querySelector('.close-popup');

renderHeader();
renderHome();
renderCommentPopup();
