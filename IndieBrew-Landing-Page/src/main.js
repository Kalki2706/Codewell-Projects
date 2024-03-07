const menu = document.querySelector('.menu'),
  close = document.querySelector('.close'),
  nav = document.querySelector('.navbar'),
  buttons = document.querySelectorAll('button');

menu.addEventListener('click', () => {
  nav.classList.add('open__nav');
  menu.style.display = 'none';
  close.style.display = 'block';
});

close.addEventListener('click', () => {
  nav.classList.remove('open__nav');
  menu.style.display = 'block';
  close.style.display = 'none';
});

// Sign Up page redirection
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    function redirect() {
      window.location.href = './Sign-Up-Page/index.html';
    }

    redirect();
  });
});
