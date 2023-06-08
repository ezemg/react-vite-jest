import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp.jsx';

describe('Prueba en <FirstApp />', () => {
  const title = 'Hola soy Ezequiel';
  const subTitle = 'Soy un subtitulito';

  test('debe hacer match con el snapshot', () => {
    const { container } = render(<FirstApp title={title} />);

    expect(container).toMatchSnapshot();
  });

  test('debe mostrar mensaje "Hola, soy Ezequiel"', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  test('debe buscar titulo en h1', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test('debe mostrar el subtitulo enviado por props', () => {
    render(<FirstApp title={title} subTitle={subTitle} />);

    expect(screen.getAllByText(subTitle).length).toBe(2);
  });
});
