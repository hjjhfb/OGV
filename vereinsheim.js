fetch('!Data.xml')
  .then(response => response.text())
  .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
  .then(data => {
    const eintraege = data.querySelectorAll('vereinsheim > mietmoeglichkeiten > eintrag');
    const tbody = document.querySelector('#mietmoeglichkeiten-tabelle tbody');
    if (tbody) {
      eintraege.forEach(eintrag => {
        const ueberschrift = eintrag.querySelector('ueberschrift');
        if (ueberschrift) {
          const tr = document.createElement('tr');
          tr.innerHTML = `<td colspan="3" class="miet-ueberschrift">${ueberschrift.textContent}</td>`;
          tbody.appendChild(tr);
        } else {
          const tr = document.createElement('tr');
          const bez = eintrag.querySelector('bezeichnung')?.textContent || '';
          const preis = eintrag.querySelector('preis')?.textContent || '';
          const info = eintrag.querySelector('info')?.textContent || '';
          tr.innerHTML = `<td>${bez}</td><td>${preis}</td><td>${info}</td>`;
          tbody.appendChild(tr);
        }
      });
    }
    // Kontakttext wie gehabt ...
    const kontakt = data.querySelector('vereinsheim > kontakt')?.textContent || '';
    const kontaktElem = document.getElementById('vereinsheim-kontakt');
    if (kontaktElem) kontaktElem.textContent = kontakt;
  });