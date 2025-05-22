fetch('!Data.xml')
  .then(response => response.text())
  .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
  .then(data => {
    const mitglieder = data.querySelectorAll('vorstand > mitglied');
    const tbody = document.querySelector('#vorstand-tabelle tbody');
    mitglieder.forEach(mitglied => {
      const amt = mitglied.querySelector('amt')?.textContent || '';
      const name = mitglied.querySelector('name')?.textContent || '';
      const adresse = mitglied.querySelector('adresse')?.textContent || '';
      const mail = mitglied.querySelector('mail')?.textContent || '';
      const info = mitglied.querySelector('info')?.textContent || '';
      const telefon = mitglied.querySelector('telefon')?.textContent || '';
      // E-Mail als Link
      let kontakt = [];
      if (mail) kontakt.push(`<a href="mailto:${mail}">${mail}</a>`);
      if (telefon) kontakt.push(telefon);
      if (info) kontakt.push(info);
      const kontaktInfo = kontakt.join('<br>');
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${amt}</td>
        <td>${name}</td>
        <td>${adresse}</td>
        <td>${kontaktInfo}</td>
      `;
      tbody.appendChild(tr);
    });
  });