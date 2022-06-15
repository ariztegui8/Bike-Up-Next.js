import Image from 'next/image';
import Layout from '../../components/Layout';
import styles from '../../styles/BikeUrl.module.css';

const ProductoBike = ({bike}) => {

    const {descripcion, imagen, nombre, precio} = bike;

  return (
        <Layout
            pagina={nombre}
        >
            <div className={`container ${styles.bike}`}>
                <Image layout='responsive' width={700} height={550} src={imagen[0].url} alt={`imagen bike ${nombre}`}/>
                <div className={styles.containerBike}>
                    <h3>{nombre}</h3>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>${precio}</p>
                </div>
            </div>
        </Layout>
  )
}

export async function getServerSideProps({query: {url}}) {
   
    const urlBike = `${process.env.API_URL}/bicis?url=${url}`
    const respuesta = await fetch(urlBike)
    const bike = await respuesta.json()

    return{
        props: {
            bike: bike[0]
        }
    }
}

export default ProductoBike