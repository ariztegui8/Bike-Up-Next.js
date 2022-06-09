import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    <div>
       <Layout
        pagina='Nosotros'
       >
        <main className='container py-4'>
          <h2 className={styles.title}>Nosotros</h2>

          <div className={`row ${styles.containerNosotros}`}>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6'>
              <Image width={600} height={450} src="/assets/blog.jpg" alt='foto-blog'/>
            </div>
           

            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6'>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis a maiores molestias. Pariatur, ratione. Quos voluptatibus autem a quis pariatur et natus, illo incidunt. Voluptas facere at, quasi asperiores, adipisci incidunt amet est, nemo libero dolore in nulla corrupti ad sed quas enim! Atque dolores quos nostrum veritatis, magnam sequi, numquam dignissimos ea, doloribus ut ratione aut est accusantium quas non porro expedita consequatur repellendus eligendi maxime aperiam eveniet asperiores in a. Quas a optio alias, exercitationem doloremque molestiae eveniet tenetur totam magni cum sunt, laborum ab! In temporibus nulla doloribus dicta rem? Veniam delectus quod harum, porro eius asperiores.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis a maiores molestias. Pariatur, ratione. Quos voluptatibus autem a quis pariatur et natus, illo incidunt. Voluptas facere at, quasi asperiores, adipisci incidunt amet est, nemo libero dolore in nulla corrupti ad sed quas enim! Atque dolores quos nostrum veritatis, magnam sequi, numquam dignissimos ea, doloribus ut ratione aut est accusantium quas non porro expedita consequatur repellendus eligendi maxime aperiam eveniet asperiores in a. Quas a optio alias, exercitationem doloremque molestiae eveniet tenetur totam magni cum sunt, laborum ab! In temporibus nulla doloribus dicta rem? Veniam delectus quod harum, porro eius asperiores.</p>
            </div>
          </div>
        </main>

       </Layout>
    </div>
  )
}

export default Nosotros