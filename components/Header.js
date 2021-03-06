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
                <a>
                  <Image className={styles.logo} width={150} height={75} src="/assets/logo.svg" alt='imagen-logo'/>
                </a>
            </Link>

            <nav className={styles.navegation}>
                <Link href='/'>Inicio</Link>
                <Link href='/tienda'>Tienda</Link>
                <Link href='/blog'>Blog</Link>
                <Link href='/nosotros'>Nosotros</Link>
                <Link href='/carrito'>
                  <Image layout='fixed' width={42} height={45} src="/assets/carrito1.svg" alt='imagen-carrito' fill="currentColor"/>
                </Link>
                
                
            </nav>
        </div>
      </div>
   </header>

   </>
  )
}

export default Header