import { searchGeneric } from "../utils";

describe('Test para search generic', ()=>{
    const objectToSearch = {
        nombre: 'Jade',
        apellido: 'Delevingne',
        materia: 10,
        color: true,
    };

    test('Debería buscar en el nombre', ()=>{
        const resultSearchGeneric = searchGeneric(objectToSearch, ['nombre'], 'Jade');
        expect(resultSearchGeneric).toBeTruthy();
    });

    test('Debería buscar en el nombre, que regrese falso porque no coincide', ()=>{
        const resultSearchGeneric = searchGeneric(objectToSearch, ['nombre'], 'Hola');
        expect(resultSearchGeneric).toBeFalsy();
    });

    test('Debería regresar un booleano', ()=>{
        const resultSearchGeneric = searchGeneric(objectToSearch, ['nombre'], 'Hola');
        expect(typeof resultSearchGeneric).toBe('boolean');
    });

    test('Debería validar que con string vacío regrese false', ()=>{
        const resultSearchGeneric = searchGeneric(objectToSearch, ['nombre'], '');
        expect(resultSearchGeneric).toBeFalsy();
    });

    test('Debería validar que es numérico, si no que regrese false', ()=>{
        //Verifica el arreglo enviado, una de sus propiedades
        const resultSearchGeneric = searchGeneric(objectToSearch, ['materia'], 'Hola');
        expect(resultSearchGeneric).toBeFalsy();
    });

    test('Debería validar que sea string, si no que regrese false', ()=>{
        const resultSearchGeneric = searchGeneric(objectToSearch, ['color'], '');
        expect(resultSearchGeneric).toBeFalsy();
    });
});