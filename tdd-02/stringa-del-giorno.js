const filtraData = (data) => {
  return data < 10 ? '0' + data : data;
}

const dataOdierna = () => {
  const oggi = new Date();
  const giorno = filtraData(oggi.getDate());
  const mese = filtraData(oggi.getMonth() + 1);
  const anno = oggi.getFullYear();

  console.log('giorno', giorno);
  console.log('mese', mese);

  return `${giorno}.${mese}.${anno}`;
};

const fraseDelGiorno = () => {
  return `questa e' la mia stringa del giorno`;
};

module.exports = () => {
  const data = dataOdierna();
  const frase = fraseDelGiorno();

  return data + ' - ' + frase;
};
