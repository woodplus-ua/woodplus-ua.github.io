/*
 * Список фото для галереї "Наші роботи".
 * Формат: JPG, ширина 1600px, кадрування по центру 4:3.
 */
const GALLERY_ITEMS = [
  { src: "images/kitchen-01.jpg", alt: "Кухня на замовлення в Чернігові — фарбований МДФ", category: "kitchen" },
  { src: "images/kitchen-02.jpg", alt: "Кухня на замовлення в Чернігові — П-подібне планування", category: "kitchen" },
  { src: "images/kitchen-03.jpg", alt: "Кухня на замовлення в Чернігові — темний фасад з деревом", category: "kitchen" },
  { src: "images/kitchen-04.jpg", alt: "Кухня на замовлення в Чернігові — з островом", category: "kitchen" },
  { src: "images/kitchen-05.jpg", alt: "Кухня на замовлення в Чернігові — лінійне планування", category: "kitchen" },
  { src: "images/kitchen-06.jpg", alt: "Кухня на замовлення в Чернігові — глянцевий фасад", category: "kitchen" },
  { src: "images/kitchen-07.jpg", alt: "Кухня на замовлення в Чернігові — дерев'яні фасади", category: "kitchen" },
  { src: "images/kitchen-08.jpg", alt: "Кухня на замовлення в Чернігові — кутове планування", category: "kitchen" },
  { src: "images/kitchen-09.jpg", alt: "Кухня на замовлення в Чернігові — готовий проєкт", category: "kitchen" },
  { src: "images/kitchen-10.jpg", alt: "Кухня на замовлення в Чернігові — світлий фасад", category: "kitchen" },
  { src: "images/kitchen-11.jpg", alt: "Кухня на замовлення в Чернігові — сучасний дизайн", category: "kitchen" },
  { src: "images/kitchen-12.jpg", alt: "Кухня на замовлення в Чернігові — компактна планіровка", category: "kitchen" },

  { src: "images/wardrobe-01.jpg", alt: "Шафа-купе на замовлення в Чернігові", category: "wardrobe" },
  { src: "images/wardrobe-02.jpg", alt: "Шафа-купе на замовлення в Чернігові — вбудована модель", category: "wardrobe" },
  { src: "images/wardrobe-03.jpg", alt: "Шафа-купе на замовлення в Чернігові — дзеркальні дверцята", category: "wardrobe" },
  { src: "images/wardrobe-04.jpg", alt: "Шафа-купе на замовлення в Чернігові — кутова модель", category: "wardrobe" },
  { src: "images/wardrobe-05.jpg", alt: "Шафа-купе на замовлення в Чернігові — сучасний дизайн", category: "wardrobe" },
  { src: "images/wardrobe-06.jpg", alt: "Шафа-купе на замовлення в Чернігові — світлий фасад", category: "wardrobe" },
  { src: "images/wardrobe-07.jpg", alt: "Шафа-купе на замовлення в Чернігові — з системою зберігання", category: "wardrobe" },
  { src: "images/wardrobe-08.jpg", alt: "Шафа-купе на замовлення в Чернігові — темний фасад", category: "wardrobe" },
  { src: "images/wardrobe-09.jpg", alt: "Шафа-купе на замовлення в Чернігові — готовий проєкт", category: "wardrobe" },
  { src: "images/wardrobe-10.jpg", alt: "Шафа-купе на замовлення в Чернігові — розсувні дверцята", category: "wardrobe" },
  { src: "images/wardrobe-11.jpg", alt: "Шафа-купе на замовлення в Чернігові — індивідуальний проєкт", category: "wardrobe" },

  { src: "images/hallway-01.jpg", alt: "Меблі для передпокою на замовлення в Чернігові", category: "hallway" },
  { src: "images/hallway-02.jpg", alt: "Меблі для передпокою на замовлення в Чернігові — з дзеркалом", category: "hallway" },
  { src: "images/hallway-03.jpg", alt: "Меблі для передпокою на замовлення в Чернігові — система зберігання", category: "hallway" },
  { src: "images/hallway-04.jpg", alt: "Меблі для передпокою на замовлення в Чернігові — компактна модель", category: "hallway" },
  { src: "images/hallway-05.jpg", alt: "Меблі для передпокою на замовлення в Чернігові — готовий проєкт", category: "hallway" },

  { src: "images/other-01.jpg", alt: "Меблі на замовлення в Чернігові — індивідуальний проєкт", category: "other" },
  { src: "images/other-02.jpg", alt: "Меблі на замовлення в Чернігові — вітальня", category: "other" },
  { src: "images/other-03.jpg", alt: "Меблі на замовлення в Чернігові — вбудована система зберігання", category: "other" },
  { src: "images/other-04.jpg", alt: "Меблі на замовлення в Чернігові — робоче місце", category: "other" },
  { src: "images/other-05.jpg", alt: "Меблі на замовлення в Чернігові — гардеробна", category: "other" },
  { src: "images/other-06.jpg", alt: "Меблі на замовлення в Чернігові — дитяча кімната", category: "other" },
  { src: "images/other-07.jpg", alt: "Меблі на замовлення в Чернігові — стінка під ТВ", category: "other" },
  { src: "images/other-08.jpg", alt: "Меблі на замовлення в Чернігові — комод", category: "other" },
  { src: "images/other-09.jpg", alt: "Меблі на замовлення в Чернігові — вбудована шафа", category: "other" },
  { src: "images/other-10.jpg", alt: "Меблі на замовлення в Чернігові — готовий проєкт", category: "other" },
  { src: "images/other-11.jpg", alt: "Меблі на замовлення в Чернігові — сучасний дизайн", category: "other" },
  { src: "images/other-12.jpg", alt: "Меблі на замовлення в Чернігові — індивідуальне рішення", category: "other" },
];

const PAGE_SIZE = 8;
let currentCategory = "kitchen";
let visibleCount = PAGE_SIZE;

function renderGallery(category, resetVisible = true) {
  currentCategory = category;
  if (resetVisible) visibleCount = PAGE_SIZE;

  const grid = document.getElementById("galleryGrid");
  grid.innerHTML = "";

  const items = GALLERY_ITEMS.filter((item) => item.category === category);
  const shown = items.slice(0, visibleCount);

  shown.forEach((item, index) => {
    const cell = document.createElement("div");
    cell.className = "gallery-item";

    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt;
    img.loading = index < 4 ? "eager" : "lazy";
    img.onerror = () => cell.classList.add("img-missing");

    const label = document.createElement("span");
    label.className = "placeholder-label";
    label.textContent = "фото";

    cell.appendChild(img);
    cell.appendChild(label);

    cell.addEventListener("click", () => openLightbox(item, cell.classList.contains("img-missing")));

    grid.appendChild(cell);
  });

  renderShowMoreButton(items.length);
}

function renderShowMoreButton(totalCount) {
  let btn = document.getElementById("showMoreBtn");
  if (btn) btn.remove();

  if (visibleCount >= totalCount) return;

  btn = document.createElement("button");
  btn.type = "button";
  btn.id = "showMoreBtn";
  btn.className = "btn btn-outline show-more-btn";
  btn.textContent = "Показати ще";
  btn.addEventListener("click", () => {
    visibleCount += PAGE_SIZE;
    renderGallery(currentCategory, false);
  });

  document.getElementById("galleryGrid").insertAdjacentElement("afterend", btn);
}

function openLightbox(item, isMissing) {
  const lightbox = document.getElementById("lightbox");
  const content = document.getElementById("lightboxContent");
  content.innerHTML = "";

  if (isMissing) {
    const label = document.createElement("span");
    label.className = "placeholder-label";
    label.textContent = "фото";
    content.appendChild(label);
  } else {
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt;
    img.onerror = () => {
      content.innerHTML = "";
      const label = document.createElement("span");
      label.className = "placeholder-label";
      label.textContent = "фото";
      content.appendChild(label);
    };
    content.appendChild(img);
  }

  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
}

document.getElementById("lightboxClose").addEventListener("click", closeLightbox);

document.getElementById("lightbox").addEventListener("click", (e) => {
  if (e.target.id === "lightbox") closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.disabled) return;
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    renderGallery(btn.dataset.category);
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

renderGallery("kitchen");
