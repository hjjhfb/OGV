document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.dropdown > a').forEach(link => {
    link.addEventListener('click', function(e) {
      if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        e.preventDefault();
        e.stopPropagation();
        const li = this.parentElement;
        // Schließe andere offene Menüs
        document.querySelectorAll('.dropdown.touch-open').forEach(openLi => {
          if (openLi !== li) openLi.classList.remove('touch-open');
        });
        li.classList.toggle('touch-open');
        // Nach längerer Verzögerung scrolle das Untermenü an den unteren Rand
        if (li.classList.contains('touch-open')) {
          setTimeout(() => {
            const submenu = li.querySelector('.submenu');
            if (submenu) {
              submenu.scrollIntoView({ behavior: 'smooth', block: 'end' });
            } else {
              li.scrollIntoView({ behavior: 'smooth', block: 'end' });
            }
          }, 400);
        }
      }
    });
  });

  document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown.touch-open').forEach(li => li.classList.remove('touch-open'));
    }
  });
});