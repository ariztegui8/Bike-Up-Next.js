
import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

const Layout = ({children, pagina}) => {
  return (
    <div>
        <Head>
            <title>Bike Up! - {pagina}</title>
            <meta name="description" content="Sitio Web de ventas de bicicletas" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,700;1,900&display=swap" rel="stylesheet"/>
        </Head>

        <Header />

        {children}

        <Footer />
    </div>
  )
}

export default Layout