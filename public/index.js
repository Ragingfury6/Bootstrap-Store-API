let filterRadioButtons = document.querySelectorAll('.selection-value');

filterRadioButtons.forEach((b) => {
  b.addEventListener('click', () => {
    filterRadioButtons.forEach((button) => button.setAttribute('sel', false));
    b.setAttribute('sel', true);
    selectionType.value = b.textContent;
  });
});

// let priceFilter = document.querySelector('.price-filter');
// let filterType = 'desc';
// let filterElements = [
//   `<i class="link-primary fa-solid fa-chevron-down chevron-filter"></i>`,
//   `<i class="link-primary fa-solid fa-chevron-up chevron-filter"></i>`,
// ];
