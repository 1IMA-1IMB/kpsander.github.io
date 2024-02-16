document.addEventListener("DOMContentLoaded", function() {
  const overlay = document.querySelector(".overlay");
  const hero = document.querySelector(".hero");
  
  window.addEventListener("scroll", function() {
    const scrollPosition = window.scrollY;
    
    overlay.style.transform = `translateY(${scrollPosition * 0.2}px)`;

    hero.style.transform = `translateY(${scrollPosition * 0.4}px)`;
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  }, { threshold: 0.5 });

  const hiddenElements = document.querySelectorAll('.hidden');

  hiddenElements.forEach((el) => observer.observe(el));

  console.log(hiddenElements);
});

const projectElList = document.querySelectorAll('.project');

projectElList.forEach(projectEl => {
    projectEl.addEventListener('click', () => {
        document.querySelector('.focusproject')?.classList.remove('focusproject');
        projectEl.classList.add('focusproject');
    });
});