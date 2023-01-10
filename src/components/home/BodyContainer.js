import SimpleSlider from "./Carousel";
import Categorias from "./Categorias";
import Sales from "./Sales";
import CarouselSelection from './CarouselSelection';

import Newsletter from "../Newsletter";

import perfumesBanner from '../../public/images/perfumesBanner.jpg';
import cosmeticaNatural from '../../public/images/cosmeticaNatural.jpg';
import cosemticaCoreana from '../../public/images/cosmeticaCoreana.jpg';
import BCP from '../../public/images/BCP.jpg';
import Logo_kasnet from '../../public/images/Logo_kasnet.jpg';



function BodyContainer() {
    return (
        <div className="container-home">

            <SimpleSlider />
            <Categorias />
            <Sales />

            <img className="banner-horizontal" src={perfumesBanner} />

            <div className="banners-verticales">
                <img className="banner-vertical" src={cosmeticaNatural} />
                <img className="banner-vertical" src={cosemticaCoreana} />
            </div>

            <CarouselSelection />


            <div className="banners-servicios">
                <img className="banner-servicio" src={BCP}/>
                <img className="banner-servicio" src={Logo_kasnet} />
            </div>


            <Newsletter/>



        </div>

    )
}

export default BodyContainer;