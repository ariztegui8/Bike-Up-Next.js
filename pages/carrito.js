import Layout from '../components/Layout';
import styles from '../styles/Carrito.module.css';
import Image from 'next/image'
import { useEffect, useState } from 'react';

const Carrito = ({carrito, actualizarCantidad, deleteProduct}) => {

   const [total, setTotal] = useState(0);

   useEffect(()=>{
    const calculoTotal = carrito.reduce((total, producto) => total + producto.cantidad * producto.precio, 0)
    setTotal(calculoTotal);

   }, [carrito])

  return (
    <Layout
        pagina='Carrito de Compras'
    >
        <h2 className={styles.title}>Carrito de Compras</h2>
        <main className={`container py-5 ${styles.contenido}`}>
            <div className={styles.carrito}>
                {carrito.length === 0 ? <h3>Carrito Vacio</h3> : (
                    carrito.map(producto =>(
                        <div
                            key={producto.id}
                            className={styles.producto}
                        >
                            <div>
                                <Image layout='responsive' width={1200} height={700} src={producto.imagen} alt={producto.nombre}/>
                            </div>

                            <div>
                                <p className={styles.nombre}>{producto.nombre}</p>
                                <div>
                                    <p className={styles.cantidad}> Cantidad:</p>
                                    <select
                                        value={producto.cantidad}
                                        onChange={(e)=> actualizarCantidad({
                                            cantidad: e.target.value,
                                            id: producto.id
                                        })}
                                        className={styles.select}
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>
                                <p className={styles.precio}>$<span>{producto.precio}</span></p>
                                <p className={styles.subtotal}>Subtotal: $ <span>{producto.precio * producto.cantidad}</span></p>
                            </div>

                            <button
                                type='button'
                                className={styles.button}
                                onClick={()=> deleteProduct(producto.id)}
                            >
                                X
                            </button>
                        </div>
                    ))
                )}
            </div>

            <div className={styles.resumen}>
                {total > 0 ? (
                    <>
                        <h3 className={styles.pedido}>Resumen del Pedido</h3>
                        <h4>Total a pagar: ${total}</h4>
                    </>
                ) : <h3>No hay productos en el carrito</h3>}
                
            </div>
        </main>
    </Layout>
  
  )
}

export default Carrito