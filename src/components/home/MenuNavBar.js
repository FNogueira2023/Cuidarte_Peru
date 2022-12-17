import '../../public/stylesheets/home/menuNavbar.css';


function MenuNavBar() {
    return (
        <>
            <div className='menuNav'>
                <ul className='menuList'>
                    <li className='menuList-item'>
                        <a href='#'>Belleza</a>
                    </li>
                    <li className='menuList-item'>
                        <a href='#'>Dermocosmética</a>
                    </li>
                    <li className='menuList-item'>
                        <a href='#'>Cuidado Personal</a>
                    </li>
                    <li className='menuList-item'>
                        <a href='#'>Bebés</a>
                    </li>
                    <li className='menuList-item'>
                        <a href='#'>Hogar y Alimentos</a>
                    </li>
                    <li className='menuList-item'>
                        <a href='#'>Salud y Farmacia</a>
                    </li>
                    <li className='menuList-item'>
                        <a href='#'>Pago Servicios</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default MenuNavBar;

