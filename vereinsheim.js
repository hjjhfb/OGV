fetch('!Data.xml')
  .then(response => response.text())
  .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
  .then(data => {
    const punkte = data.querySelectorAll('vereinsheim > mietmoeglichkeiten > punkt');
    const ul = document.getElementById('mietmoeglichkeiten');
    if (ul) {
      punkte.forEach(punkt => {
        const li = document.createElement('li');
        li.textContent = punkt.textContent;
        ul.appendChild(li);
      });
    }
    // Mietmöglichkeiten wie gehabt ...
    const kontakt = data.querySelector('vereinsheim > kontakt')?.textContent || '';
    const kontaktElem = document.getElementById('vereinsheim-kontakt');
    if (kontaktElem) kontaktElem.textContent = kontakt;
  });