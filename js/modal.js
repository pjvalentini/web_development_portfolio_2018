const portfolioContainer = document.querySelector('.portfolio-items');

portfolioContainer.addEventListener('click', (e) => {
  // checking for event.
  // console.log(e);
  e.preventDefault();
  // This will target on the specific tag you click on, portfolio-link in this case.
  const modalToggle = e.target.closest('.portfolio-link');
  // console.log(modalToggle);

  if(!modalToggle) return
  // parentNode is the figcaption, nextElementSibling is the div class portfolio-modal.
  const modal = modalToggle.parentNode.nextElementSibling;
  // console.log(modal);
  const closeButton = modal.querySelector('.modal-close');

  modal.classList.add('is-open');
  // this click will remove the is-open class.
  closeButton.addEventListener('click', () => {
    modal.classList.remove('is-open');
    // console.log("modal closes");
  });
});
