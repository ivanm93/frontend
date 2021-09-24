import {Link} from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid" id="holder">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link to="/" class="nav-link active" aria-current="page">Home</Link>
          </li>
          <li class="nav-item">
            <Link to="/nosotros" class="nav-link active" aria-current="page">nosotros</Link>
          </li>
           <li class="nav-item">
            <Link to="/productos" class="nav-link active" aria-current="page" >Productos</Link>
          </li>
           <li class="nav-item">
            <Link to="/contactos" class="nav-link active" aria-current="page" >Contactanos</Link>
          </li>
        </ul>
       
      </div>
    </div>
  </nav>
    )
}
export default Nav;