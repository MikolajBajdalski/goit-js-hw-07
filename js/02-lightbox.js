import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery')

const liTemplates = galleryItems.map((galleryItems)=> `
<li class="gallery__item">
  <a class="gallery__link" href="${galleryItems.original}">
    <img
      class="gallery__image"
      src="${galleryItems.preview}"
      data-source="${galleryItems.original}"
      alt="${galleryItems.description}"
    />
  </a>
</li>
`);
galleryList.insertAdjacentHTML("beforeend", liTemplates.join(""));



const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });



