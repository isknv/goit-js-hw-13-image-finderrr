import photoTpl from './tpl/photo-card.handlebars';
import { beforeSearch, fetchImg } from './apiService.js';

const gallery = document.querySelector('.gallery');
const input = document.querySelector('.form-control');

document.querySelector('#search-form').addEventListener('input', e => {
  e.preventDefault();
  if (!input.value) {
    gallery.innerHTML = '';
    return false;
  }
  const searchQuery = e.currentTarget.elements.query.value;

  return fetchImg(searchQuery)
    .then(data => renderImages(data.hits))
    .catch(error => {
      throw new Error(error);
    });
});

document.querySelector('.button').addEventListener('click', () => {
  return fetchImg(beforeSearch)
    .then(data => renderImages(data.hits))
    .catch(error => {
      throw new Error(error);
    });
});

function renderImages(data) {
  gallery.insertAdjacentHTML('beforeend', photoTpl(data));
  if (data.length === 1) {
    showBtn();
  }
  hiddenBtn();
  gallery.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
}

function showBtn() {
  return button.classList.remove('is-hidden');
}

function hideBtn() {
  return button.classList.add('is-hidden');
}
