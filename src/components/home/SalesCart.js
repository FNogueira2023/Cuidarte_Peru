import shampooImg from '../../public/images/shampoo2.jpg';
import '../../public/stylesheets/home/salesCart.css';

function SalesCart() {
    return (
        <article clasName='sales-cart'>
            <div className='sales-cart-container'>
                <img className='sales-cart-img' src={shampooImg} />
                <div className="sales-cart-description">
                    <p>Dove</p>
                    <p>Acondicionador Dove Nutritive Secrets Ritual de Crecimiento x 400</p>
                </div>

                <p className='sales-price'> S/40.00</p>

                <button className='sales-button'>
                    Agregar al carrito
                </button>

            </div>
        </article>
    )
}

export default SalesCart;