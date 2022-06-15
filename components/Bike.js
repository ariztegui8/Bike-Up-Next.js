import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Bike.module.css';

const Bike = ({bike}) => {

    const {descripcion, imagen, nombre, precio, url} = bike;

  return (
    <div className={styles.bike}>
        <Image layout='responsive' width={500} height={350} src={imagen[0].url} alt={`imagen bike ${nombre}`}/>
        <div className={styles.containerBike}>
            <h3>{nombre}</h3>
            <p className={styles.descripcion}>{descripcion}</p>
            <p className={styles.precio}>${precio}</p>
            <Link href={`bikes/${url}`}>
                Ver Producto
            </Link>
        </div>
    </div>
  )
}

export default Bike