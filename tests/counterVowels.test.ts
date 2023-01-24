import { contarVocales } from '../utils/index';

const cadena: string = 'Cadena para prueba oficial';
const counter = contarVocales(cadena);

describe('test para counter vowels', ()=>{
    test('comprobando que regresa un objeto', ()=>{
        expect(typeof counter).toBe('object');
    });
    test('Contando a', ()=>{
        expect(counter.a).toEqual(6);
    });
    test('Contando e', ()=>{
        expect(counter.e).toEqual(2);
    });
    test('Contando i', ()=>{
        expect(counter.i).toEqual(2);
    });
}); 