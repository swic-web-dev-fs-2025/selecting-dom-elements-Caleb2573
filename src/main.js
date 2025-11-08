import "./style.css";
const header = document.querySelector("#main-header");
const links = document.querySelectorAll(".navbar a");
const internalLinks = document.querySelectorAll('a[href^="/"]');
const internalLinksArray = Array.from(internalLinks);
const required = document.querySelectorAll("input[required]");
const cards = document.querySelectorAll(".card");
//task 1
console.info(header);
//task 2
links.forEach((link) => {
  console.info(link);
});
//task 3
internalLinksArray.map((link) => {
  link.textContent = `[internal] ${link.textContent}`;
});
//task 4
required.forEach((input) => {
  input.style.outline = `2px solid gold`;
});
//task 5
cards.forEach((card) => {
  card.innerHTML = `<div class="card" data-product-id="${card.dataset.productId}" data-viewed = "true">${card.innerHTML}</div>`;
});
//task 6
const secondCard = document.querySelector(`[data-product-id='2'] .price`);
if (secondCard) {
  secondCard.textContent = "$24.99";
} else {
  console.info("Second card not found");
}
