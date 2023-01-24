describe('Renderizado de tests', ()=>{
    test('Debería regresar el resultado de una suma', ()=>{
        const sumar=(a: number,b: number)=>a+b;
        expect(sumar(3,5)).toBe(8);
    });
    test('Verificar el typeof de una var', ()=>{
        const variable: string = 'Hola';
        expect(typeof variable).toBe('string');
    });
});