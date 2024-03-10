const menu = document.querySelector('.menu'),
  close = document.querySelector('.close'),
  nav = document.querySelector('.navbar'),
  buttons = document.querySelectorAll('button');

function addClickEvent(selector, EventCallback) {
  if (!(EventCallback instanceof Function)) {
    console.error(
      `Error: addClickEvent(selector, EventCallback): Second argument require to be a function callback but it is of ${typeof EventCallback} type`
    );
  }

  let element = document.querySelectorAll(selector);
  if (element.length === 1) {
    console.log(element[0]);
    element[0].addEventListener('click', EventCallback);
  }

  element.forEach((allElements) => {
    allElements.addEventListener('click', EventCallback);
  });
}

// menu
addClickEvent('.menu', () => {
  nav.classList.add('open__nav');
  menu.style.display = 'none';
  close.style.display = 'block';
});

// close
addClickEvent('.close', () => {
  nav.classList.remove('open__nav');
  menu.style.display = 'block';
  close.style.display = 'none';
});

// buttons
addClickEvent('button', () => {
  function redirect() {
    window.open('./sign-up-page/index.html', '_blank');
  }

  redirect();
});
