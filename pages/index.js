import Layout from '../components/Layout'
import Banner from '../components/Banner';
import Marcas from '../components/Marcas';
import Menu from '../components/Menu';
import styles from '../styles/Inicio.module.css';
import Image from 'next/image';




export default function Home({inicio, menu}) {
  return (
      
      <Layout
        pagina='Inicio'
      >


        <div className=''>
          
          <div>
            <Banner 
              inicio={inicio}
            />
          </div>

          <div className={`container my-3 ${styles.containerMenu}`}>
            {menu.map(set =>(
              <Menu 
                key={set.url}
                set={set}
              />
            ))}
          </div>

          <div className='mb-5'>
            <Image layout='responsive' width={1800} height={700} src="/assets/fondo.webp" alt={`img fondo inicio`}/>
          </div>

          <div>
            <Marcas />
          </div>

        </div>

      </Layout>

      

  )
  
}

export async function getServerSideProps() {
  const urlInicio = `${process.env.API_URL}/inicios`;
  const urlMenu = `${process.env.API_URL}/menus`;

  const [resInicio, resCursos] = await Promise.all([
    fetch(urlInicio),
    fetch(urlMenu)
  ])

  const [inicio, menu] = await Promise.all([
    resInicio.json(),
    resCursos.json()
  ])

  return{
      props: {
        inicio,
        menu
      }
  }
}
