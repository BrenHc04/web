const sections = document.querySelectorAll('.main-section');

function checkSectionVisibility() {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.8) {
      section.classList.add('active');
    }
  });
}

window.addEventListener('scroll', checkSectionVisibility);
window.addEventListener('load', checkSectionVisibility);