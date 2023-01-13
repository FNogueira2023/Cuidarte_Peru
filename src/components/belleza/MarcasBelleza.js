import '../../public/stylesheets/belleza/marcasBelleza.css';
// import '../../public/stylesheets/home/categorias.css';


import lorealMarca from '../../public/images/Belleza/lorealMarcaBelleza.jpg';
import antonioBanderas from '../../public/images/Belleza/antonioBanderas.jpg';
import extreme from '../../public/images/Belleza/extreme.jpg';
import look from '../../public/images/Belleza/look.jpg';
import sallyHansen from '../../public/images/Belleza/sallyHansen.jpg';
import maybelline from '../../public/images/Belleza/maybelline.jpg';





function MarcasBelleza() {
    return (

        <>

            <div className="marcasBelleza-menu">
                <a href='#' className="marcasBelleza-item">
                    <img className='marcasBelleza-img' src={lorealMarca} />
                </a>



                <a href='#' className="marcasBelleza-item">
                    <img className='marcasBelleza-img' src={antonioBanderas} />
                </a>

                <a href='#' className="marcasBelleza-item">
                <img className='marcasBelleza-img' src={extreme}/>
                </a>

                <a href='#' className="marcasBelleza-item">
                <img className='marcasBelleza-img' src={look}/>
                </a>

                <a href='#' className="marcasBelleza-item">
                <img className='marcasBelleza-img' src={maybelline}/>
                </a>

                <a href='#' className="marcasBelleza-item">
                <img className='marcasBelleza-img' src={sallyHansen}/>
                </a>      


            </div>
        </>




    )
}

export default MarcasBelleza;