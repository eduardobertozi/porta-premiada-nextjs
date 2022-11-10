import PortaModel from "../model/Porta";

export function criarPortas(qtde: number, portaComPresente: number): PortaModel[] {
    return Array.from({ length: qtde }, (_, i) => {
        const numero = i + 1
        const temPresente = numero === portaComPresente
        return new PortaModel(numero, temPresente)
    })
}

export function atualizarPortas(portas: PortaModel[], portaModificada: PortaModel): PortaModel[] {
    return portas.map(portaAtual => {
        const igualAmodificada = portaAtual.numero === portaModificada.numero

        if (igualAmodificada) {
            return portaModificada
        } else {
            return portaModificada.aberta ? portaAtual : portaAtual.desselecionar()
        }
    })
}