import { render, screen } from '@testing-library/react';
import Test1 from "./Test1";
import App from '../App';

test('debe existir el componente', () => {
    render(<Test1 />);
}) 