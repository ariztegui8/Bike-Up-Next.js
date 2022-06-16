import Image from 'next/image';
import { useState } from 'react';
import Layout from '../../components/Layout';
import styles from '../../styles/BikeUrl.module.css';

const ProductoBike = ({bike}) => {

    const [contador, setContador] = useState(0);

    const sumar = ()=>{
        setContador( contador + 1)
    }

    const restar = ()=>{
        setContador( contador - 1)
    }

    const reset = ()=>{
        setContador( contador )
    }

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

                    <form>
                        <label>Cantidad:</label>
                        <select>
                            <option value="">-- Seleccione --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>

                        <input 
                            type="submit"
                            value="Agregar al Carrito"
                        />
                    </form>

                    <div>
                        <label>Cantidad</label>
                        <div className='d-flex'>
                            <button onClick={restar}>-</button>
                            <p>{contador}</p>
                            <button onClick={sumar}>+</button>
                        </div>

                        <input 
                            type="submit"
                            value="Agregar al Carrito"
                        />
                    </div>
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