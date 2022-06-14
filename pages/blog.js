
import Entrada from '../components/Entrada';
import Layout from '../components/Layout'
import styles from '../styles/Blog.module.css'

const Blog = ({entrada}) => {

  return (
    <Layout
        pagina='Blog'
      >
        <main>
          <h2 className={styles.title}>Blog</h2>

          <div className={styles.blog}>
            {entrada.map(entrada =>(
              <Entrada 
                key={entrada.id}
                entrada={entrada}
              />
            ))}
          </div>
        </main>

      </Layout>
  )
}

export async function getServerSideProps(){

    const url = 'http://localhost:1337/blogs';
    const respuesta = await fetch(url);
    const entrada = await respuesta.json();

  return{
    props: {
        entrada
    }
  }
}

export default Blog