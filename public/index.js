let filterRadioButtons = document.querySelectorAll('.selection-value');
let addProductButton = document.querySelector('.add-product');
let dialog = document.querySelector('dialog');

filterRadioButtons.forEach((b) => {
  b.addEventListener('click', () => {
    filterRadioButtons.forEach((button) => button.setAttribute('sel', false));
    b.setAttribute('sel', true);
    selectionType.value = b.textContent;
  });
});

addProductButton.addEventListener('click', () => {
  dialog.style.setProperty('display', 'block');
  dialog.showModal();
});
// let priceFilter = document.querySelector('.price-filter');
// let filterType = 'desc';
// let filterElements = [
//   `<i class="link-primary fa-solid fa-chevron-down chevron-filter"></i>`,
//   `<i class="link-primary fa-solid fa-chevron-up chevron-filter"></i>`,
// ];
