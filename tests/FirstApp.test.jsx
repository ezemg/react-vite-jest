import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp.jsx';

describe('Prueba en <FirstApp />', () => {
  //   test('debe hacer match con el snapshot', () => {
  //     const title = 'Hola, Soy Ezequiel';
  //     const { container } = render(<FirstApp title={title} />);
  //     expect(container).toMatchSnapshot();

  test('Debe mostrar el titulo en un h1', () => {
    const title = 'Hola, Soy Ezequiel';
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );
    expect(getByText(title)).toBeTruthy();

    //   const h1 = container.querySelector('h1');
    //   expect(h1.innerHTML).toContain(title);
    expect(getByTestId('test-title').innerHTML).toContain(title);
  });

  test('debe de mostrar el subtitulo enviado por props', () => {
    const title = 'Hola, Soy Ezequiel';
    const subTitle = 'Soy un subtitulo';
    const { getByText, getAllByText } = render(
      <FirstApp title={title} subTitle={subTitle} />
    );
    expect(getAllByText(subTitle).length).toBe(2);
  });
});
