import Layout from '../components/Layout';
import styles from '../styles/Carrito.module.css';

const Carrito = () => {
  return (
    <Layout
        pagina='Carrito de Compras'
    >
        <h2 className={styles.title}>Carrito de Compras</h2>
        <main className={`container ${styles.contenido}`}>
            <div>
                1
            </div>

            <div>
                2
            </div>
        </main>
    </Layout>
  
  )
}

export default Carrito