fetch('!Data.xml')
  .then(response => response.text())
  .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
  .then(data => {
    const faqs = data.querySelectorAll('faq > frage');
    const faqList = document.getElementById('faq-list');
    if (faqList && faqs.length > 0) {
      faqList.innerHTML = Array.from(faqs).map(faq => {
        const titel = faq.querySelector('titel')?.textContent || '';
        // Zeilenumbrüche in <antwort> durch <br> ersetzen
        let antwort = faq.querySelector('antwort')?.innerHTML || '';
        antwort = antwort.replace(/\n/g, '<br>');
        const link = faq.querySelector('link')?.textContent;
        let linkHtml = '';
        if (link) {
          linkHtml = `<div><a href="${link}" target="_blank" rel="noopener">Beitrittsformular herunterladen</a></div>`;
        }
        return `
          <details>
            <summary>${titel}</summary>
            <div>${antwort}</div>
            ${linkHtml}
          </details>
        `;
      }).join('');
    }
  });