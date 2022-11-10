import Head from 'next/head'
import Card from '../components/Card'
import Link from 'next/link'
import EntradaNumerica from '../components/EntradaNumerica'
import { useState } from 'react'
import styles from '../styles/Formulario.module.css'

export default function Formulario() {
    const [qtdePortas, setQtdePortas] = useState(3)
    const [comPresente, setComPresente] = useState(1)

    return (
        <div className={styles.formulario}>
            <Head>
                <title>Porta Premiada</title>
            </Head>

            <div>
                <Card bgColor='#c0392c'>
                    <h1>Monty Hall</h1>
                </Card>
                <Card>
                    <EntradaNumerica
                        text='Qtde Portas? '
                        value={qtdePortas}
                        onChange={novaQtde => setQtdePortas(novaQtde)}
                    />
                </Card>
            </div>
            <div>
                <Card>
                    <EntradaNumerica
                        text='Porta com presente: '
                        value={comPresente}
                        onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)}
                    />
                </Card>
                <Card bgColor='#28a085'>
                    <Link href={`/jogo/${qtdePortas}/${comPresente}`} className={styles.link}>
                        <h2>Iniciar</h2>
                    </Link>
                </Card>
            </div>
        </div>
    )
}
