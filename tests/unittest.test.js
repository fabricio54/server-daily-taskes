//import { validPassword } from "../src/services/functionSimples.js";

const validPassword = require("./functiontests.js");


describe("Testando a validade da senha de usuário que deve ser definida como sendo uma string que tenha ao menos um caracter especial e o tamanho esteja entre 8 12 caracters", () => {


    it("Teste Válido: testando uma senha que esteja nas diretrizes estabelecidas", () => {
        expect(validPassword("fabricio@")).toBe(true)
    })

    it("Teste Inválido: testando senha com tamanho fora dos padrões de tamanho", () => {
        expect(validPassword("fafa@")).toBe(false);
    })

    it("Teste Invádido: testando senha sem o(s) caracter(s) especia(is)", () => {
        expect(validPassword("fabricio")).toBe(false);
    })

})
