import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'


const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.columna1}>
                <Link href="/">
                    <Image className={styles.logo} width={150} height={75} src="/assets/logo.svg" alt='imagen-logo'/>
                </Link>
                <h5 className='mt-4'>Abouts Us</h5>
                <p>2022 Best Ecommerce</p>
            </div>

            <div className={styles.columna2}>
                <h5>Contacts Us</h5>
                <Link href="#">+54 2494597241</Link>
                <Link href="#">jorgeariztegui8@gmail.com</Link>
            </div>

            <div className={styles.columna3}>
                <h5>Information</h5>
                <Link href="#">Abouts Us</Link>
                <Link href="#">Blog</Link>
                <Link href="#">Events</Link>
                <Link href="#">Gallery</Link>
            </div>

            <div className={styles.columna4}>
                <h5>Links</h5>
                <Link href="#">Services</Link>
                <Link href="#">Support</Link>
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Terns & conditions</Link>
            </div>

            <div className={styles.columna5}>
                <h5>Subscribe Us</h5>
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
            <div className={styles.icons}>
                <Link href="#">
                    <Image width={40} height={40} src="/assets/fb.svg" alt='imagen-logo'/>
                </Link>
                <Link href="#">
                    <Image width={40} height={40} src="/assets/tw.svg" alt='imagen-logo'/>
                </Link>
                <Link href="#">
                    <Image width={40} height={40} src="/assets/in.svg" alt='imagen-logo'/>
                </Link>
                <Link href="#">
                    <Image width={40} height={40} src="/assets/yt.svg" alt='imagen-logo'/>
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