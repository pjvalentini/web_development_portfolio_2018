// Navigation Animation

const navToggle = document.querySelector('.menu-button');
const nav = document.querySelector('nav');
const containerAll = document.querySelector('.container-all');

// some variables to clean up the code.
const containerAllStyle = containerAll.style;
const bodyCLassList = document.body.classList;



navToggle.addEventListener('click', () => {
  // console.log("im clicked");
  containerAllStyle.transition = 'transform 250ms ease-in-out';
  // adding a class using classList.add...no "." required.
  // as the "." will end up in the html as well.
  // you can replace .add with .toggle to have the class added and then removed.
  bodyCLassList.toggle('nav-is-open');
});

nav.addEventListener('click', () => {
  // console.log("click");
  containerAllStyle.transition = '0ms';
  bodyCLassList.remove('nav-is-open');
});
