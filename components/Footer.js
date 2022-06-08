import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'


const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.columna}>
                <Link href="/">
                    <Image className={styles.logo} width={200} height={100} src="/assets/logo.svg" alt='imagen-logo'/>
                </Link>
                <h4>Abouts Us</h4>
                <p>lorendwedddwdedwedwedwedwe</p>
            </div>

            <div className={styles.columna}>
                <h4>Contacts Us</h4>
                <p>+54 2494597241</p>
                <p>jorgeariztegui8@gmail.com</p>
            </div>

            <div className={styles.columna}>
                <h4>Information</h4>
                <p>Abouts Us</p>
                <p>Blog</p>
                <p>Events</p>
                <p>Gallery</p>
            </div>

            <div className={styles.columna}>
            <h4>Links</h4>
                <p>Services</p>
                <p>Support</p>
                <p>Privacy Policy</p>
                <p>Terns & conditions</p>
            </div>

            <div className={styles.columna}>
                <h4>Abouts Us</h4>
                <input
                    type="text"
                    placeholder='Enter Your Email'
                >
                </input>
                <button>Subscribe</button>
            </div>
        </div>

        <hr className={styles.hr}/>

        <div className={styles.containIicons}>
            <div >
                <Link href="#">
                    <Image className={styles.icon} width={42} height={42} src="/assets/facebook.png" alt='imagen-logo'/>
                </Link>
                <Link href="#">
                    <Image className={styles.icon} width={42} height={42} src="/assets/twitter.png" alt='imagen-logo'/>
                </Link>
                <Link href="#">
                    <Image className={styles.icon} width={42} height={42} src="/assets/instagram.png" alt='imagen-logo'/>
                </Link>
                <Link href="#">
                    <Image className={styles.icon} width={42} height={42} src="/assets/youtube.png" alt='imagen-logo'/>
                </Link>
            </div>

            <div>
                <p>CopyRight &#169; website Bike Up! 2022</p>
            </div>
        </div>

    </footer>
  )
}

export default Footer