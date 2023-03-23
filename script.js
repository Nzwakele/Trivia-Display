const imageContainers = document.querySelectorAll('.image-container');
let lastContainerIndex = 0;

function checkScroll() {
  const windowHeight = window.innerHeight;
  const scrollTop = window.scrollY;
  const containerHeight = imageContainers[0].offsetHeight;
  const containerTop = imageContainers[0].getBoundingClientRect().top + scrollTop;
  
  if (scrollTop + windowHeight > containerTop + containerHeight / 2) {
    lastContainerIndex++;
    if (lastContainerIndex >= imageContainers.length) {
      window.removeEventListener('scroll', checkScroll);
    } else {
      imageContainers[lastContainerIndex].classList.add('show');
    }
  }
}

window.addEventListener('scroll', checkScroll);
imageContainers[lastContainerIndex].classList.add('show');
