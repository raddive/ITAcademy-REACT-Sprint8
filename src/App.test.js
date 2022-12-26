import { render, screen } from '@testing-library/react';
import App from './App';

describe('renders learn react link', () => {
  it('Debe existir el componente', () => {
    render(<App />);
  })
});
