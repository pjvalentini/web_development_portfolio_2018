const portfolioContainer = document.querySelector('.portfolio-items');

portfolioContainer.addEventListener('click', (e) => {
  // checking for event.
  // console.log(e);
  e.preventDefault();
  // This will target on the specific tag you click on, portfolio-link in this case.
  const modalToggle = e.target.closest('.portfolio-link');
  console.log(modalToggle);

  if(!modalToggle) return
  // parentNode is the figcaption, nextElementSibling is the div class portfolio-modal.
  const modal = modalToggle.parentNode.nextElementSibling;
  // console.log(modal);
  const closeButton = modal.querySelector('.modal-close');

  const modalOpen = () => {
     modal.classList.add('is-open');
     modal.style.animation = "modalIn 500ms forwards";
     // removing background scroll when the modal is open.
     document.body.style.overflowY = "hidden";
  };

  const modalClose = () => {
    modal.classList.remove('is-open');
    modal.removeEventListener('animationend', modalClose);
  };

  // this click will remove the is-open class.
  closeButton.addEventListener('click', () => {
    modal.style.animation = "modalOut 500ms forwards";
    // we need an event here so that when the animation ends modalClose function will trigger.
    modal.addEventListener('animationend', modalClose);
    // add a scroll to the main page when modal is closed.
    document.body.style.overflowY = "scroll";
    // console.log("modal closes");
  });

// adding the ability to exit the modal using the "esc" key (keyCode = 27)
  document.addEventListener('keydown', (e) => {
    // console.log(e.keyCode);
    if (e.keyCode === 27) {
      modal.style.animation = "modalOut 500ms forwards";
      // we need an event here so that when the animation ends modalClose function will trigger.
      modal.addEventListener('animationend', modalClose);
      // add a scroll to the main page when modal is closed.
      document.body.style.overflowY = "scroll";
    }
  });
modalOpen();
});
