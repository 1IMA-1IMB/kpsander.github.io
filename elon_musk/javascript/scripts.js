document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.querySelector(".overlay");
    const hero = document.querySelector(".hero");
    
    window.addEventListener("scroll", function() {
      const scrollPosition = window.scrollY;
      
      overlay.style.transform = `translateY(${scrollPosition * 0.2}px)`;

      hero.style.transform = `translateY(${scrollPosition * 0.4}px)`;
    });
  });