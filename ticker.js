fetch('!Data.xml')
  .then(response => response.text())
  .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
  .then(data => {
    const nachrichten = data.querySelectorAll('ticker > nachricht');
    const tickerContent = document.getElementById('ticker-content');
    if (nachrichten.length > 0 && tickerContent) {
      const text = Array.from(nachrichten).map(n => n.textContent).join(' | ');
      // Zwei Mal hintereinander für nahtlosen Loop
      tickerContent.innerHTML = `<span>${text}&nbsp;&nbsp;&nbsp;</span><span>${text}&nbsp;&nbsp;&nbsp;</span>`;
    }
  })
  .catch(() => {
    const tickerContent = document.getElementById('ticker-content');
    if (tickerContent) tickerContent.textContent = 'Ticker konnte nicht geladen werden.';
  });