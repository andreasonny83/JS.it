describe('Stringa del giorno', () => {
  global.Date = jest.fn(() => {
    return {
      getDate() { return 10 },
      getMonth() { return 1 },
      getFullYear() { return 2000 }
    }
  });

  it.only('ritorni una stringa', () => {
    const stringaDelGiorno = require('./stringa-del-giorno');
    const aspettativa = typeof stringaDelGiorno();

    expect(typeof aspettativa).toEqual('string');
  });

  it('la stringa contenga una data', () => {
    const stringaDelGiorno = require('./stringa-del-giorno');
    const aspettativa = /^[0-9]{2}.[0-9]{2}.[0-9]{4}/
      .test(stringaDelGiorno());

    expect(aspettativa).toBeTruthy();
  });

  it('la stringa contenga una frase', () => {
    const stringaDelGiorno = require('./stringa-del-giorno');
    const aspettativa = / - [\w ']+$/
      .test(stringaDelGiorno());

    expect(aspettativa).toBeTruthy();
  });
});
