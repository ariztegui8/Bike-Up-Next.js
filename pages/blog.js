
import Entrada from '../components/Entrada';
import Layout from '../components/Layout'
import styles from '../styles/Blog.module.css'

const Blog = ({entrada}) => {

  // const url = `${process.env.NEXT_PUBLIC_API_URL}/blogs`
  

  return (
    <Layout
        pagina='Blog'
      >
        <main className='container'>
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

export async function getStaticProps(){

    const url = `${process.env.API_URL}/blogs?_sort=created_at:desc`;
    const respuesta = await fetch(url);
    const entrada = await respuesta.json();

  return{
    props: {
        entrada
    }
  }
}

export default Blog