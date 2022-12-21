import shampooImg from '../../public/images/shampoo2.jpg';
import '../../public/stylesheets/home/salesCart.css';

function SalesCart() {
    return (
        <div clasName='sales-cart'>
            <div className='sales-cart-container'>
                <img className='sales-cart-img' src={shampooImg} />
                <div className="description">
                    <h6>Dove</h6>
                    <h6>Acondicionador Dove Nutritive Secrets Ritual de Crecimiento x 400</h6>
                </div>

                <h6 className='sales-price'> S/40</h6>

                <button>
                    Agregar al carrito
                </button>

            </div>
        </div>
    )
}

export default SalesCart;