import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import styles from '../styles/Banner.module.css';


const Banner = ({inicio}) => {


  return (
        <Carousel fade className='py-1'>
            <Carousel.Item>
                <Image layout='responsive' width={1200} height={400} src={inicio[0].imagen[0].url} alt={`imagen banner`}/>

                <Carousel.Caption>
                    <h3>{inicio[0].titulo}</h3>
                    <p>{inicio[0].descripcion}</p>
                    <button className={styles.btn}>Más información</button>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                  <Image layout='responsive' width={1200} height={400} src={inicio[1].imagen[0].url} alt={`imagen banner`}/>

                <Carousel.Caption>
                    <h3>{inicio[1].titulo}</h3>
                    <p>{inicio[1].descripcion}</p>
                    <button className={styles.btn}>Más información</button>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                  <Image layout='responsive' width={1200} height={400} src={inicio[2].imagen[0].url} alt={`imagen banner`}/>

                <Carousel.Caption>
                    <h3>{inicio[2].titulo}</h3>
                    <p>{inicio[2].descripcion}</p>
                    <button className={styles.btn}>Más información</button>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                  <Image layout='responsive' width={1200} height={400} src={inicio[3].imagen[0].url} alt={`imagen banner`}/>

                <Carousel.Caption>
                    <h3>{inicio[3].titulo}</h3>
                    <p>{inicio[3].descripcion}</p>
                    <button className={styles.btn}>Más información</button>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
  )
}

export default Banner