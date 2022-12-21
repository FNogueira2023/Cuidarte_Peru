import SimpleSlider from "./Carousel";
import Categorias from "./Categorias";

function BodyContainer() {
    return (
        <div className="container-home">
            <SimpleSlider />
            <Categorias />
        </div>

    )
}

export default BodyContainer;