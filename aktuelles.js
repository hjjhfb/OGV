fetch('!Data.xml')
  .then(response => response.text())
  .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
  .then(data => {
    document.getElementById('headline1').textContent =
      data.querySelector('aktuelles > headline1')?.textContent || '';
    document.getElementById('text1').textContent =
      data.querySelector('aktuelles > text1')?.textContent || '';
    document.getElementById('headline2').textContent =
      data.querySelector('aktuelles > headline2')?.textContent || '';
    document.getElementById('text2').textContent =
      data.querySelector('aktuelles > text2')?.textContent || '';
  });