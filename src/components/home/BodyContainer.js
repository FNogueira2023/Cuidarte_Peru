import SimpleSlider from "./Carousel";
import Categorias from "./Categorias";
import Sales from "./Sales";

function BodyContainer() {
    return (
        <div className="container-home">
            <SimpleSlider />
            <Categorias />

            <Sales />

        </div>

    )
}

export default BodyContainer;