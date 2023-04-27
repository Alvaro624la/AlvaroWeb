import { render, fireEvent, screen } from "@testing-library/react";
import App from '../App';

// creamos un bloque que agrupe distintos tests
describe('bloque - btn contacto (App.js > Inicio)', ()=>{
    // ejecutar antes de cada prueba
    beforeEach(()=>{
        render(<App/>);
    });
    // creamos el primer test dentro de la agrupacion o el bloque de tests de describe()
    test('está btn contacto en el documento?',()=>{
        const btn = screen.getByRole('button', { name: 'my-btn' });
        expect(btn).toBeInTheDocument();
    });
    test('zIndex: -1 en btn contacto',()=>{
        const btn = screen.getByRole('button', { name: 'my-btn' });
        expect(btn).toHaveStyle({ zIndex: '-1' });
    }); 
    test('zIndex: 999 en btn contacto',()=>{
        const btn = screen.getByRole('button', { name: 'my-btn' });
        fireEvent.click(btn);
        expect(btn).toHaveStyle({ zIndex: '999' });
    });
});