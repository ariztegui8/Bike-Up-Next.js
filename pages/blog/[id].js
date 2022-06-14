import {useRouter} from 'next/router'

const EntradaBlog = ({entradaId}) => {
    console.log(entradaId);

    const router = useRouter()

  return (
    <div>EntradaBlog</div>
  )
}

export async function getServerSideProps({query: {id}}) {

    const url = `http://localhost:1337/blogs/${id}`;
    const respuesta = await fetch(url);
    const entradaId = await respuesta.json();

    return{
        props: {
            entradaId
        }
    }
}

export default EntradaBlog