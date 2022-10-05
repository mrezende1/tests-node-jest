import Carrinho from "../carrinho.js";
import Item from "../item.js";

describe('Testes no carrinho', () => {
    it('Deve inicializar vazio', () => {
        const carrinho = new Carrinho();

        expect(carrinho.subtotal).toBeNull();
    });

    it('Recebendo um novo item', () => {
        const item1 = new Item('Benana', 2, 5);
        const item2 = new Item('Uva', 0.5, 1);
        const carrinho = new Carrinho();

        carrinho.adiciona(item1);
        carrinho.adiciona(item2);

        expect(typeof carrinho).toBe('object');

        expect(carrinho.itens[0]).toBe(item1);
        expect(carrinho.itens[1]).toBe(item2);

        expect(carrinho.itens).toContain(item1);
        expect(carrinho.itens).toContain(item2);
    });
    it('Deve ter a propriedade "total" na inicialização', () => {
        const carrinho = new Carrinho();

        expect(carrinho).toHaveProperty('total')
    });

    it('Deve lançar erro ao finalizar compra com carrinho vazio', () => {


        function englobaErroCarrinho() {
            const carrinho = new Carrinho();
            carrinho.finalizaCompra()
        }

        expect(englobaErroCarrinho).toThrowError('Carrinho de compras vazio')
    });

    it('Deve adicionar o frete', () => {
        const carrinho = new Carrinho();
        carrinho.adicionaFrete(10);

        expect(carrinho.frete).toBe(10);

    });

    it('Deve finalizar as compras', () => {
        const item1 = new Item('Benana', 2, 5);
        const item2 = new Item('Uva', 0.5, 1);

        const carrinho = new Carrinho();
        carrinho.adiciona(item1);
        carrinho.adiciona(item2);
        carrinho.adicionaFrete(10);

        expect(carrinho.finalizaCompra()).toStrictEqual({
            subtotal: 10.5,
            frete: 10,
            total: 20.5
        });

    });
});