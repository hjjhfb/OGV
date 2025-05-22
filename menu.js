document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.dropdown > a').forEach(link => {
    link.addEventListener('click', function(e) {
      if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        e.preventDefault();
        e.stopPropagation(); // <-- verhindert das sofortige Schließen!
        const li = this.parentElement;
        // Schließe andere offene Menüs
        document.querySelectorAll('.dropdown.touch-open').forEach(openLi => {
          if (openLi !== li) openLi.classList.remove('touch-open');
        });
        li.classList.toggle('touch-open');
      }
    });
  });

  document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown.touch-open').forEach(li => li.classList.remove('touch-open'));
    }
  });
});