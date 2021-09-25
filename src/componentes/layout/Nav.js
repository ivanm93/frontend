import '../../styles/componentes/layout/Nav.css';

import {NavLink} from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light" id="holder">
    <div class="container-fluid" >
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NavLink activeClassName="activo" exact to="/">Home</NavLink>
          </li>
          <li class="nav-item">
            <NavLink activeClassName="activo" exact to="/nosotros"  >nosotros</NavLink>
          </li>
           <li class="nav-item">
            <NavLink activeClassName="activo" exact to="/productos"  >Productos</NavLink>
          </li>
           <li class="nav-item">
            <NavLink activeClassName="activo" exact to="/contactos"  >Contactanos</NavLink>
          </li>
        </ul>
       
      </div>
    </div>
  </nav>
    )
}
export default Nav;