fetch('http://localhost:3000/frase-del-giorno')
  .then(res => res.json())
  .then(res => {
    const div = document.querySelector('#fraseDelGiorno');
    const testo = document.createTextNode(frase);

    div.appendChild(testo);
  });
