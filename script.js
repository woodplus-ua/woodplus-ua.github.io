/*
 * Список фото для галереї "Наші роботи".
 *
 * ЩО РОБИТИ: коли з'являться фото кухонь — покладіть файли у папку images/
 * з іменами, вказаними нижче (kitchen-01.jpg ... kitchen-09.jpg).
 * Формат: JPG або WEBP, бажана ширина ~1200px. Нічого більше міняти не треба —
 * як тільки файл з'явиться за потрібним іменем, сірий плейсхолдер
 * автоматично заміниться на фото.
 *
 * Щоб додати нові розділи в майбутньому ("Шафи-купе", "Передпокої"):
 * 1. Додайте нові об'єкти в цей масив з category: "cabinets" або "hallways".
 * 2. Приберіть атрибут disabled у відповідної кнопки в index.html
 *    (.filter-btn[data-category="cabinets"] / [data-category="hallways"]).
 */
const GALLERY_ITEMS = [
  { src: "images/kitchen-01.jpg", alt: "Кухня на замовлення, світлий фасад", category: "kitchen" },
  { src: "images/kitchen-02.jpg", alt: "Кухня на замовлення, П-подібне планування", category: "kitchen" },
  { src: "images/kitchen-03.jpg", alt: "Кухня на замовлення, темний фасад з деревом", category: "kitchen" },
  { src: "images/kitchen-04.jpg", alt: "Кухня на замовлення, острів", category: "kitchen" },
  { src: "images/kitchen-05.jpg", alt: "Кухня на замовлення, лінійне планування", category: "kitchen" },
  { src: "images/kitchen-06.jpg", alt: "Кухня на замовлення, глянцевий фасад", category: "kitchen" },
  { src: "images/kitchen-07.jpg", alt: "Кухня на замовлення, дерев'яні фасади", category: "kitchen" },
  { src: "images/kitchen-08.jpg", alt: "Кухня на замовлення, кутове планування", category: "kitchen" },
  { src: "images/kitchen-09.jpg", alt: "Кухня на замовлення, готовий проєкт", category: "kitchen" }
];

function renderGallery(category) {
  const grid = document.getElementById("galleryGrid");
  grid.innerHTML = "";

  GALLERY_ITEMS.filter((item) => item.category === category).forEach((item) => {
    const cell = document.createElement("div");
    cell.className = "gallery-item";

    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt;
    img.loading = "lazy";
    img.onerror = () => cell.classList.add("img-missing");

    const label = document.createElement("span");
    label.className = "placeholder-label";
    label.textContent = "фото";

    cell.appendChild(img);
    cell.appendChild(label);

    cell.addEventListener("click", () => openLightbox(item, cell.classList.contains("img-missing")));

    grid.appendChild(cell);
  });
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
