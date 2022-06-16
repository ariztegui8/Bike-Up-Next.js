import Image from 'next/image';
import styles from '../styles/Menu.module.css';

const Menu = ({set}) => {

    const {titulo, imagen, descripcion} = set;

  return (
    <div className={styles.menu}>
        <Image layout='responsive' width={600} height={400} src={imagen[0].url} alt={`imagen menu`}/>
        <p className={styles.title}>{titulo}</p>
        <p className={styles.descripcion}>{descripcion}</p>
    </div>


  )
}

export default Menu