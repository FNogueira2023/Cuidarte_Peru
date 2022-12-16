import '../../public/stylesheets/menuNavbar.css';


function MenuNavBar() {
    return (
        <>
            <div className='menuNav'>
                <ul className='menuList'>
                    <li className='menuList-item'>
                        <a>Belleza</a>
                    </li>
                    <li className='menuList-item'>
                        <a>Dermocosmética</a>
                    </li>
                    <li className='menuList-item'>
                        <a>Cuidado Personal</a>
                    </li>
                    <li className='menuList-item'>
                        <a>Bebés</a>
                    </li>
                    <li className='menuList-item'>
                        <a>Hogar y Alimentos</a>
                    </li>
                    <li className='menuList-item'>
                        <a>Salud y Farmacia</a>
                    </li>
                    <li className='menuList-item'>
                        <a>Pago Servicios</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default MenuNavBar;

