import NavBar from "./NavBar";
import MenuNavBar from "./MenuNavBar";
import SimpleSlider from "./Carousel";
import Categorias from "./Categorias";

import '../../public/stylesheets/home/home.css';


function Home() {
    return (
        <>


            <NavBar />
            <MenuNavBar />           

            <div className="container-home">                
            <SimpleSlider />
            <Categorias/>
              
            </div>

        </>
    )
}

export default Home;