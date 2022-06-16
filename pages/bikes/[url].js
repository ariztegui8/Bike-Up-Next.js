import Image from 'next/image';
import { useState } from 'react';
import Layout from '../../components/Layout';
import styles from '../../styles/BikeUrl.module.css';

const ProductoBike = ({bike, agregarCarrito}) => {

    const [cantidad, setCantidad] = useState(1);


    const handleChange = e =>{
        setCantidad(parseInt(e.target.value))
    }


    const handleSubmit = e =>{
        e.preventDefault()

        if(cantidad < 1) {
            alert('Cantidad no valida')
            return
        }

        const bikeSeleccionada = {
            id,
            imagen: imagen[0].url,
            nombre,
            precio,
            cantidad,
        };

        agregarCarrito(bikeSeleccionada);
    }

    const {descripcion, imagen, nombre, precio, id} = bike;

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

                    <form
                        className={styles.form}
                        onSubmit={handleSubmit}
                    >
                        <label>Cantidad:</label>
                        <select
                            value={cantidad}
                            onChange={handleChange}
                        >
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