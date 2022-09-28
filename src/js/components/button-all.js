const btnAdd = document.querySelector('.js-btn-all');

if (btnAdd) {
  btnAdd.addEventListener('click', () => {
    btnAdd.parentNode.classList.add('works--all');
  })
}


