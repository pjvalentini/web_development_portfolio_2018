const navToggle = document.querySelector('.menu-button');

navToggle.addEventListener('click', () => {
  // console.log("im clicked");
  // adding a class using classList.add...no "." required.
  // as the "." will end up in the html as well.
  document.body.classList.add('nav-is-open');
});
