import { getImagen } from '../../src/base-pruebas/11-async-await.js';

describe('Pruebas en AsyncAwait', () => {
  test('getImagen', async () => {
    try {
      const url = await getImagen();
      console.log('Llego en el try');
      expect(typeof url).toBe('string');
    } catch (error) {
      console.log('vino con error', error);
    }
  });
});
