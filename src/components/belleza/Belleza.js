import Footer from "../Footer";
import Newsletter from "../Newsletter";
import MarcasBelleza from "./MarcasBelleza";
import '../../public/stylesheets/belleza/belleza.css';

import maquillajeImg01 from '../../public/images/Belleza/maquillaje01.jpg';


function Belleza() {
    return (
        <div className="container-home">

            <img className="banner-horizontal banner-belleza" src={maquillajeImg01} />

            <MarcasBelleza/>

            <Newsletter />
            <Footer />


        </div>

    )
}

export default Belleza;