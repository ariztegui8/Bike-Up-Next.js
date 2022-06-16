import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic'
import Image from 'next/image';


const Marcas = () => {

    const OwlCarousel = dynamic(()=>{
        return import("react-owl-carousel");
      }, {ssr: false})

  return (
    <div>
        <OwlCarousel
            className='owl-carousel'
            loop={true}
            margin={50} 
            items={5}
            autoplay={true}
            center={true}
    >
      <div className='item'>
        <Image width={400} height={230} src="/assets/ex.png" alt={`imagen logo`}/>
      </div>

      <div className='item'>
        <Image width={400} height={230} src="/assets/ex2.png" alt={`imagen logo`}/>
      </div>

      <div className='item'>
        <Image width={400} height={230} src="/assets/ex3.png" alt={`imagen logo`}/>
      </div>

      <div className='item'>
        <Image width={400} height={230} src="/assets/ex5.png" alt={`imagen logo`}/>
      </div>

      <div className='item'>
        <Image width={400} height={230} src="/assets/ex6.png" alt={`imagen logo`}/>
      </div>

      <div className='item'>
        <Image width={400} height={230} src="/assets/ex7.png" alt={`imagen logo`}/>
      </div>

      <div className='item'>
        <Image width={400} height={230} src="/assets/ex8.png" alt={`imagen logo`}/>
      </div>

      <div className='item'>
        <Image width={400} height={230} src="/assets/ex9.png" alt={`imagen logo`}/>
      </div>

      <div className='item'>
        <Image width={400} height={230} src="/assets/ex10.png" alt={`imagen logo`}/>
      </div>

      <div className='item'>
        <Image width={400} height={230} src="/assets/ex11.png" alt={`imagen logo`}/>
      </div>

      <div className='item'>
        <Image width={400} height={230} src="/assets/ex77.png" alt={`imagen logo`}/>
      </div>

      <div className='item'>
        <Image width={400} height={230} src="/assets/ex88.png" alt={`imagen logo`}/>
      </div>

      <div className='item'>
        <Image width={400} height={230} src="/assets/ex99.png" alt={`imagen logo`}/>
      </div>
    </OwlCarousel>
    </div>
  )
}

export default Marcas