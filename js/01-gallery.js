import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryCardsMarkup(galleryItems);

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
function createGalleryCardsMarkup(items) {
  return items
    .map(
      ({ original, preview, description }) => `<div class="gallery__item"> 
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
    )
    .join("");
} 
  
galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);

// Реалізація делегування на div.gallery і отримання url великого зображення. Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї.

galleryContainer.addEventListener("click", onClickImages);

function onClickImages(event) {
    event.preventDefault();
	if (event.target.nodeName !== "IMG") {
		return;
	}
	const instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`);
	instance.show();

    galleryContainer.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        instance.close();
      }
    });
};




