import Bike from "./Bike"
import styles from '../styles/Listado.module.css'


const Listado = ({bikes}) => {
  return (
    <div className={`container ${styles.containerListado}`}>
        {bikes.map(bike =>(
            <Bike
                key={bike.url}
                bike={bike}
            />
        ))}
    </div>
  )
}

export default Listado