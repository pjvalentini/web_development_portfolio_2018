const navToggle = document.querySelector('.menu-button');

navToggle.addEventListener('click', () => {
  // console.log("im clicked");
  // adding a class using classList.add...no "." required.
  // as the "." will end up in the html as well.
  // you can replace .add with .toggle to have the class added and then removed.
  document.body.classList.toggle('nav-is-open');
});
