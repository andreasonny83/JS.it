import generaFrase from './generatore-di-frase';

fetch('https://frase-del-giorno-api.now.sh/frase-del-giorno')
  .then(res => res.json())
  .then(res => generaFrase(res.messaggio));
