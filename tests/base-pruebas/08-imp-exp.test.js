import {
  getHeroeById,
  getHeroesByOwner,
} from '../../src/base-pruebas/08-imp-exp.js';

import heroes from '../../src/data/heroes.js';

describe('Pruebas en 08-imp-exp.test', () => {
  test('GetHeroeById debe retornar heroe por ID', () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
  });

  test('GetHeroeById debe retornar undefined si no existe ID', () => {
    const id = 100;
    const hero = getHeroeById(id);

    expect(hero).toBeFalsy();
  });

  test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => {
    const owner = 'DC';

    const heroes = getHeroesByOwner(owner);

    expect(heroes).toHaveLength(3);
    expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  });

  test('getHeroesByOwner debe retornar un arreglo con los heroes de Marvel', () => {
    const owner = 'Marvel';

    const heroes = getHeroesByOwner(owner);

    expect(heroes).toHaveLength(2);
    expect(heroes).toEqual([
      { id: 2, name: 'Spiderman', owner: 'Marvel' },
      { id: 5, name: 'Wolverine', owner: 'Marvel' },
    ]);

    expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  });
});
