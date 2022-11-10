// Tratar as propriedades da porta, criar ações para modificar as portas

export default class PortaModel {
    #numero: number
    #temPresente: boolean
    #selecionada: boolean
    #aberta: boolean

    constructor(numero: number, temPresente = false, selecionada = false, aberta = false) {
        this.#numero = numero
        this.#temPresente = temPresente
        this.#selecionada = selecionada
        this.#aberta = aberta
    }

    get numero() {
        return this.#numero
    }

    get temPresente() {
        return this.#temPresente

    }
    get selecionada() {
        return this.#selecionada
    }

    get aberta() {
        return this.#aberta
    }

    get fechada() {
        return !this.aberta
    }


    // Gerar uma nova instância de PortaModel, para não alterar os atributos originais

    desselecionar() {
        const selecionada = false
        return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta)
    }

    alternarSelecao() {
        const selecionada = !this.selecionada
        return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta)
    }

    abrir() {
        const aberta = true
        return new PortaModel(this.numero, this.temPresente, this.selecionada, aberta)
    }
}