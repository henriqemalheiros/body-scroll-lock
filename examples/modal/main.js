const bodyScrollLock = require('../../lib/bodyScrollLock.js');

const disableBodyScrollButton = document.querySelector('.disableBodyScroll');
const enableBodyScrollButton = document.querySelector('.enableBodyScroll');
const statusElement = document.querySelector('.bodyScrollLockStatus');
const modalElement = document.querySelector('.modal');
const scrollTargetElement = document.querySelector('.scrollTarget');

window.onload = function () {
  const versionEl = document.getElementById('version');
  versionEl.innerText = 'v15'
}

disableBodyScrollButton.onclick = function() {
  console.info('disableBodyScrollButton');

  // show modal
  modalElement.classList.add('active');

  bodyScrollLock.disableBodyScroll(scrollTargetElement);

  statusElement.innerHTML = ' &mdash; Scroll Locked';
  statusElement.style.color = 'red';
};

enableBodyScrollButton.onclick = function() {
  console.info('enableBodyScrollButton');

  // hide modal
  modalElement.classList.remove('active');

  bodyScrollLock.enableBodyScroll(scrollTargetElement);

  statusElement.innerHTML = ' &mdash; Scroll Unlocked';
  statusElement.style.color = '';
};
