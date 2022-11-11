import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryCardsMarkup(galleryItems);

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
function createGalleryCardsMarkup(items) {
    return items
    .map(
    ({
        original,
        preview,
        description,
    }) => `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    )
    .join("");
}

galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);

// Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs. Необхідно додати посилання на два файли: simple-lightbox.min.js і simple-lightbox.min.css.
// Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery. Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».
// Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt. Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.

galleryContainer.addEventListener("click", onClickGalleryImages);


function onClickGalleryImages(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
    return;
    }
    galleryCreate()
}

const galleryCreate = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});


