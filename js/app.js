AOS.init();

const containerDots = document.querySelector('.dots-container');

const removePreloader = function () {
  containerDots.style.display = 'none';
};

window.addEventListener('load', removePreloader);
