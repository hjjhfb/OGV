document.addEventListener('DOMContentLoaded', function () {
  const menuItems = document.querySelectorAll('nav ul li:has(ul)');
  menuItems.forEach(item => {
    let touched = false;
    item.addEventListener('touchstart', function (e) {
      if (!touched) {
        touched = true;
        item.classList.add('touch-open');
        e.preventDefault();
        document.addEventListener('touchstart', function docTouch(e2) {
          if (!item.contains(e2.target)) {
            touched = false;
            item.classList.remove('touch-open');
            document.removeEventListener('touchstart', docTouch);
          }
        });
      }
    });
  });
});