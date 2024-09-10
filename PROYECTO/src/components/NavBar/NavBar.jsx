import '../CartWidget/CartWidget'
import CartWidget from '../CartWidget/CartWidget'
import LOGO from '../img/LOGO.png'
import  './NavBar.css'


 function NavBar(){
    return (
    <>  
        <header class="header">

            <div class="logo">
            <a href="#"><img src= {LOGO} alt="logo" /></a>
            <li><a href="#">Tu Consola 🕹️</a></li>
            </div>

            <nav>
                <ul class="navlinks">
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
            <CartWidget/>

        </header>
           
    </>
    )
}

export default NavBar