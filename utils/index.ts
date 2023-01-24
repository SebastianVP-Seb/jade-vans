export const contarVocales = (cadena: string) => {
    let conteo = {'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0 };
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    const stringToArray = cadena.toLowerCase().split('');
    vocales.forEach((vocal: string) => {
        conteo = {
            ...conteo,
            [vocal]: stringToArray.filter(letra => letra === vocal).length,
        };
    });
    return conteo;
};

export const searchGeneric = <T>(object: T, properties: Array<keyof T>, query: string): boolean => {
    if ( query !== '' ) {
        return properties.some(property => {
            const value = object[property];
            return ( typeof value === 'string' || typeof value === 'number' )
                && value.toString().toUpperCase().includes(query.toUpperCase());
        });
    };
    return false;
};