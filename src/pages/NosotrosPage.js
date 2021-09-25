import '../styles/componentes/pages/NosotrosPage.css'


const Nosotros = (props) => {
    return (
        <section id="holder">
        <div class="container-fluid py-5 " >
          <h1 class="display-5 fw-bold">Nosotros</h1>
          <p class="col-md-8 fs-4" id="txt1">Colcar Merbus es concesionario oficial Mercedes-Benz desde hace más de 30 años. Con una sólida trayectoria y experiencia en el mercado, Colcar se ha posicionado como uno de los concesionarios líderes en nuestro país. Nuestra principal actividad es la comercialización de todos los productos que Mercedes-Benz Argentina dispone en el país: Automóviles, Vans, Camiones, Buses y repuestos originales. Además somos el único concesionario que cuenta con un área de equipamientos especializada que prepara trabajos y proyectos a la medida de nuestros clientes.</p>
        </div> 
  
        <div class="accordion" id="accordionPanelsStayOpenExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="panelsStayOpen-headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
          Misión
        </button>
      </h2>
      <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
        <div class="accordion-body">
         <p> Brindar a nuestros clientes soluciones integrales en el mundo del transporte automotor mediante productos de alta calidad y servicio al cliente inigualable.</p>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
          Visión
        </button>
      </h2>
      <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
        <div class="accordion-body">
          Buscamos crecer e innovar continuamente en la comercialización de la amplia variedad de productos y servicios que ofrecemos, aplicando no solo la creatividad, sino también la dedicación y el trabajo en equipo para que estos objetivos sean cumplidos.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="panelsStayOpen-headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
         Politicas de calidad
        </button>
      </h2>
      <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
        <div class="accordion-body">
          COLCAR MERBUS cuenta con un Sistema de Gestión de Calidad certificado bajo la norma <strong>ISO 9001.</strong> 
  
  
        </div>
      </div>
    </div>
  </div>
  
  <div id="contenedor">
        <div class="col-md-6" >
          <div class="h-100 p-5 text-white bg-dark rounded-3">
            <h2>Sucursales</h2>
            <p>Casa central · Buenos Aires <br/>
              Av. 9 de Julio, CABA <br/>
              Tel: 0800-555-5678 <br/>
              Email: mensaje@gmail.com.ar <br/>
              Horarios de Atención <br/>
              Lunes a Viernes de 09:00 a 12:00 y 14:00 a 18:00</p>
          </div>
        </div>
  
        <div class="col-md-6">
          <div class="h-100 p-5 bg-light border rounded-3">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10056.288256623013!2d-58.3846990614518!3d-34.6048283591824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1629432768513!5m2!1ses-419!2sar" width="400" height="250" style={{border:'0'}} allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>
      </div>
      </section>
    )
}
export default Nosotros;