import { somaHorasExtras, calculaDescontos } from "../index.js";

describe('Testes dos calculos de folha', () => {
    test ('Deve retornar a soma das horas extras', () => {
        const esperando = 2500;
        const retornado = somaHorasExtras(2000, 500);
    
        expect(retornado).toBe(esperando);
    
    });

    test ('Deve retornar a subtração dos descontos', () => {
        const esperando = 2300;
        const retornado = calculaDescontos(2500, 200);
    
        expect(retornado).toBe(esperando);
    
    });
}) 
