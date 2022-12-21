import '../../public/stylesheets/home/menuNavbar.css';
import { Link, Route, Routes } from 'react-router-dom';
import BodyContainer from './BodyContainer';
import Belleza from '../belleza/Belleza';



function MenuNavBar() {
    return (
        <>
            <div className='menuNav'>
                <ul className='menuList'>
                    <li className='menuList-item'>
                        <Link className='menuList-link' to='/belleza'>Belleza</Link>
                    </li>
                    <li className='menuList-item'>
                        <Link className='menuList-link' to='#'>Dermocosmética</Link>
                    </li>
                    <li className='menuList-item'>
                        <Link className='menuList-link' to='#'>Cuidado Personal</Link>
                    </li>
                    <li className='menuList-item'>
                        <Link className='menuList-link' to='#'>Bebés</Link>
                    </li>
                    <li className='menuList-item'>
                        <Link className='menuList-link' to='#'>Hogar y Alimentos</Link>
                    </li>
                    <li className='menuList-item'>
                        <Link className='menuList-link' to='#'>Salud y Farmacia</Link>
                    </li>
                    <li className='menuList-item'>
                        <Link className='menuList-link' to='#'>Pago Servicios</Link>
                    </li>
                </ul>
            </div>


            <Routes>
                <Route path='/' element={<BodyContainer />} />
                <Route path='/belleza' element={<Belleza />} />
            </Routes>


        </>
    )
}

export default MenuNavBar;

