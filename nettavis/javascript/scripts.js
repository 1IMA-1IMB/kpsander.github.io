document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.querySelector(".overlay");
    const hero = document.querySelector(".hero");
    const hero_overlay_img = document.querySelector(".hero_overlay_img");
    
    window.addEventListener("scroll", function() {
      const scrollPosition = window.scrollY;
      
      overlay.style.transform = `translateY(${scrollPosition * 0.15}px)`;

      hero.style.transform = `translateY(${scrollPosition * 0.35}px)`;

      hero_overlay_img.style.transform = `translateY(${scrollPosition * 0.17}px)`;
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