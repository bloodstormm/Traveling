import notFound from '../../img/pageNotFound.svg'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='container mx-auto flex flex-col items-center justify-center mt-12'>
        <img src={notFound} className="max-w-xl" alt="página não encontrada" />
        <h1 className='font-Binerka text-center text-6xl mt-20'>Oops! <p className='pt-1 text-4xl'>Algo deu errado</p></h1>
        <Link to="/" className="w-3/5 md:w-2/5 btn">
            Voltar para a tela inicial
        </Link>
        
    </div>
  )
}

export default NotFound