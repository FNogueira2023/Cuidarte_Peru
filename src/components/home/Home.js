import NavBar from "./NavBar";
import MenuNavBar from "./MenuNavBar";
import SimpleSlider from "./Carousel";
import '../../public/stylesheets/home/home.css';


function Home() {
    return (
        <>


            <NavBar />
            <MenuNavBar />            
            <div className="container-home">
            <SimpleSlider
            />
              
            </div>

        </>
    )
}

export default Home;