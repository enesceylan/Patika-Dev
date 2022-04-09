document.getElementById('username').innerHTML =
  prompt('Adınızı giriniz.').trim();

setInterval(() => {
  const d = new Date();
  let text = d.toLocaleString();
  let day = d.toLocaleString('tr-TR', { weekday: 'long' });
  document.getElementById('clock').innerHTML = `${text} ${day}`;
}, 1000);
