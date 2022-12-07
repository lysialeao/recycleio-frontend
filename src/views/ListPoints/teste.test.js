const empresa = {
    name: 'Lysia Reciclável',
    email : 'lysia@reciclagem.com'
}


describe("Verificando propriedades corretas em um objeto", () => {
    test("Empresa no formato correto",() => {
        expect(empresa.name).toBeDefined()
        expect(empresa.email).toBeDefined()
    })
})