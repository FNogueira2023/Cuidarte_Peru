import NavBar from "./NavBar";
import MenuNavBar from "./MenuNavBar";
import Carousel from "./Carousel";
import '../../public/stylesheets/home/home.css';

function Home() {
    return (
        <>


            <NavBar />  
            <MenuNavBar/>          
            <div className="container-home">      
            </div>

            <Carousel/>
        </>
    )
}

export default Home;