import { galleryItems } from './gallery-items.js';

// Change code below this line
// import * as basicLightbox from 'basiclightbox'
// import 'basiclightbox/dist/basicLightbox.min.css';

const galleryList = document.querySelector('.gallery')

const liTemplates = galleryItems.map((galleryItems)=> `
<div class="gallery__item">
  <a class="gallery__link" href="${galleryItems.original}">
    <img
      class="gallery__image"
      src="${galleryItems.preview}"
      data-source="${galleryItems.original}"
      alt="${galleryItems.description}"
    />
  </a>
</div>
`);


galleryList.insertAdjacentHTML("beforeend", liTemplates.join(""));

galleryList.addEventListener('click', (e)=> {
    e.preventDefault();

    if (e.target.classList.contains('gallery__image')){
        const largeImageUrl = e.target.dataset.source;

        const instance = basicLightbox.create(`
        <img src="${largeImageUrl}">
      `);
  
      instance.show();
    }
});