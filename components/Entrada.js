import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { formatearFecha } from './helpers';
import styles from '../styles/Entrada.module.css'

const Entrada = ({entrada}) => {


    const {titulo, resumen, imagen, published_at, id, url} = entrada;

  return (
    <article className='p-3'>

        <Image priority='true' layout='responsive' width={800} height={600} src={imagen[0].url} alt={`imagen blog ${titulo}`}/>

        <div className={`p-3 ${styles.entrada}`}>
            <h4>{titulo}</h4>
            <p className={styles.fecha}>{formatearFecha(published_at)}</p>
            <p className={styles.resumen}>{resumen}</p>
            <Link href={`/blog/${url}`}>
                Más información
            </Link>
        </div>
    </article>
  )
}

export default Entrada