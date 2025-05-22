fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-include').outerHTML = data;
    document.body.classList.add('page-loaded');
  });
  