import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
      <>
      
   <header className={styles.header}>
      <div className='container-header'>
        <div className={styles.barra}>
            <Link href="/">
                <Image className={styles.logo} width={200} height={100} src="/assets/logo.svg" alt='imagen-logo'/>
            </Link>

            <nav className={styles.navegation}>
                <Link href='/'>Inicio</Link>
                <Link href='/nosotros'>Nosotros</Link>
                <Link href='/blog'>Blog</Link>
                <Link href='/tienda'>Tienda</Link>
            </nav>
        </div>
      </div>
   </header>

   </>
  )
}

export default Header