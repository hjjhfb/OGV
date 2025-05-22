fetch('!Data.xml')
  .then(response => response.text())
  .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
  .then(data => {
    const nachrichten = data.querySelectorAll('ticker > nachricht');
    if (nachrichten.length > 0) {
      document.getElementById('ticker').textContent =
        Array.from(nachrichten).map(n => n.textContent).join(' | ');
    }
  })
  .catch(() => {
    document.getElementById('ticker').textContent = 'Ticker konnte nicht geladen werden.';
  });