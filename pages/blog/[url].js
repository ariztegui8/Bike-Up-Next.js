import Image from 'next/image';
import Layout from '../../components/Layout'
import styles from '../../styles/EntradaBlog.module.css'
import { formatearFecha } from '../../components/helpers';



const EntradaBlog = ({entradaId}) => {
   
  const {contenido, imagen, published_at, titulo} = entradaId;

  return (
    <Layout
      pagina={titulo}
    >
      <main className={`container ${styles.containerId}`}>
          <h2 className={styles.title}>{titulo}</h2>
          <article>
            <Image layout='responsive' width={800} height={600} src={imagen[0].url} alt={`Imagen entrada ${titulo}`}/>

            <div>
              <p className={styles.fecha}>{formatearFecha(published_at)}</p>
              <p className={styles.texto}>{contenido}</p>
            </div>
          </article>
      </main>
    </Layout>
  )
}


export async function getStaticPaths() {
  const url = `${process.env.API_URL}/blogs`;
  const respuesta = await fetch(url);
  const entradas = await respuesta.json()

  const paths = entradas.map(entrada =>({
    params: {url: entrada.url}
  }))

  return{
    paths,
    fallback: false
  }
}

export async function getStaticProps({params: {url}}) {

  const urlBlog = `${process.env.API_URL}/blogs?url=${url}`;
  const respuesta = await fetch(urlBlog);
  const entradaId = await respuesta.json();

  return{
      props: {
          entradaId: entradaId[0]
      }
  }
}


//Forma mas dinamica para hacer una peticion

// export async function getServerSideProps({query: {id}}) {

//     
//     const url = `${process.env.API_URL}/blogs/${id}`;
//     const respuesta = await fetch(url);
//     const entradaId = await respuesta.json();

//     return{
//         props: {
//             entradaId
//         }
//     }
// }

export default EntradaBlog