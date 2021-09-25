import '../../styles/componentes/layout/Footer.css';

const Footer = (props) => {
    return (

      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">

      <div class="col-md-4 d-flex align-items-center">
        <span class="text-muted">© 2021 Company, Inc</span>
      </div>
  
      <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a class="text-muted" href="#"><img src="images/facebook.png"></img></a></li>
      <li class="ms-3"><a class="text-muted" href="#"><img src="images/twitter.png"></img></a></li>
      <li class="ms-3"><a class="text-muted" href="#"><img src="images/instagram.png"></img></a></li>
      </ul>
    </footer>  
  
    )
}
export default Footer;