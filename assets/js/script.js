function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}

const closeBtn = document.getElementById('close-btn');
const IconMenu = document.getElementById('click-image');
const hamItem = document.getElementsByClassName('nav-list');

closeBtn.addEventListener('click', () => {
  closeNav();
});
IconMenu.addEventListener('click', () => {
  openNav();
});

for (let index = 0; index < hamItem.length; index += 1) {
  hamItem[index].addEventListener('click', () => {
    closeNav();
  });
}