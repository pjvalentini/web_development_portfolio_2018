const navToggle = document.querySelector('.menu-button');
const nav = document.querySelector('nav');
const containerAll = document.querySelector('.container-all');


navToggle.addEventListener('click', () => {
  // console.log("im clicked");
  containerAll.style.transition = 'transform 250ms ease-in-out';
  // adding a class using classList.add...no "." required.
  // as the "." will end up in the html as well.
  // you can replace .add with .toggle to have the class added and then removed.
  document.body.classList.toggle('nav-is-open');
});

nav.addEventListener('click', () => {
  // console.log("click");
  containerAll.style.transition = '0ms';
  document.body.classList.remove('nav-is-open');
});
