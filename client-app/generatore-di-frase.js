const generaFrase = frase => {
  const div = document.querySelector('#fraseDelGiorno');
  const testo = document.createTextNode(frase);

  div.appendChild(testo);
};

export default generaFrase;
