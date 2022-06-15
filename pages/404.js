import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Error404.module.css'

const Error404 = () => {
  return (
    <Layout>
        <div className={`container ${styles.contendor404}`}>
            <Image width={500} height={300} src="/assets/error404-2.png" alt="error 404"/>
            <p className={styles.parrafo1}>Lo sentimos, no pudimos encontrar esta página.</p>
            <p className={styles.parrafo2}>Sin embargo puedes:</p>
            <Link href="/">
              volver al inicio
            </Link>
        </div>
    </Layout>
  )
}

export default Error404