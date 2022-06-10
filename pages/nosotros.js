import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    <div>
       <Layout
        pagina='Nosotros'
       >
        <main className='container'>
          <h2 className={styles.title}>Nosotros</h2>

          <div className={styles.containerNosotros}>
            <div className={styles.containerImg}>
              <Image width={600} height={450} src="/assets/blog.jpg" alt='foto-blog'/>
            </div>
           

            <div className={styles.containerP}>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis a maiores molestias. Pariatur, ratione. Quos voluptatibus autem a quis pariatur et natus, illo incidunt. Voluptas facere at, quasi asperiores, adipisci incidunt amet est, nemo libero dolore in nulla corrupti ad sed quas enim! Atque dolores quos nostrum veritatis, magnam sequi, numquam dignissimos ea, doloribus ut ratione aut est accusantium quas non porro expedita consequatur repellendus eligendi maxime aperiam eveniet asperiores in a. Quas a optio alias, exercitationem doloremque molestiae eveniet tenetur totam magni cum sunt, laborum ab! In temporibus nulla doloribus dicta rem? Veniam delectus quod harum, porro eius asperiores.</p>
            </div>
          </div>
        </main>

       </Layout>
    </div>
  )
}

export default Nosotros