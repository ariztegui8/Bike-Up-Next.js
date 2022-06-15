
import Layout from '../components/Layout';
import Listado from '../components/Listado';
import styles from '../styles/Tienda.module.css';

const Tienda = ({bikes}) => {

  return (
    <Layout
        pagina='Tienda'
      >
        <main className='my-4'>
          <h2 className={styles.title}>Nuestra Colección</h2>

          <Listado
            bikes={bikes}
          />
        </main>

      </Layout>
  )
}

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/bicis?_sort=precio:asc`;
  const respuesta = await fetch(url)
  const bikes = await respuesta.json()

  return{
      props: {
        bikes
      }
  }
}

export default Tienda