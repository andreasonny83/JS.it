const frasiDelGiorno = [
  'Le piccole cose sono responsabili dei grandi cambiamenti',
  'Usa il tuo sorriso per cambiare il mondo. non lasciare che il mondo cambi il tuo sorriso. Buongiorno.',
  'Cambia il modo di vedere le cose e le cose che vedi cambieranno.',
  'Dona a chi ami ali per volare e radici per tornare e motivi per rimanere.',
  'Ogni parola ha conseguenze. Ogni silenzio, anche.',
];

const fraseDelGiorno = () => {
  const indice = Math.floor(Math.random() * 5);
  console.log(indice);

  return frasiDelGiorno[indice];
};

module.exports = fraseDelGiorno;
