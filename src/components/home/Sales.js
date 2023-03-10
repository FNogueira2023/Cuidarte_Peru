import '../../public/stylesheets/home/sales.css';
import SalesCart from './SalesCart';

function Sales() {
    return (
        <div className='sales-container'>
            <div className='sales-anouncement'>
                <h3 className='sales-anouncement-title'>¡Aprovecha estas grandes ofertas!</h3>
                <div className='sales-anouncement-subtitle'>
                   <h6>Descuentos increibles</h6>
                </div>                
                <h5>¡Aún queda Tiempo!</h5>



            </div>
            <div className='sales-carts'>
                <SalesCart/>
                <SalesCart/>
                <SalesCart/>                
            </div>
        </div>

    )
}

export default Sales;
