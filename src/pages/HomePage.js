import '../styles/componentes/pages/HomePage.css'


const HomePage = (props) => {
    return (
        <section >


        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
  
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="images/vehiculos.jpg" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src="images/autos.jpg" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src="images/vans.jpg" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src="images/camiones.jpg" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src="images/buses.jpg" class="d-block w-100" alt="..."/>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
  
        <div class="container">
          <div class="row flex-lg-row align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
              <img src="images/posventa.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
            </div>
            <div class="col-lg-6">
              <h1 class="display-5 fw-bold lh-1 mb-3">Posventa</h1>
              <p class="lead">Para nosotros la excelencia en la atenci??n de tus necesidades es tan importante como la calidad de sus productos. Por eso, contamos con un ??rea de postventa enfocada integralmente a brindarte el respaldo que necesit??s. Dentro de una amplia gama de servicios de postventa, ofrecemos diversos canales de comunicaci??n, servicios de asistencia 24hs, distribuci??n y log??stica de piezas originales, garant??a y entrenamiento t??cnico especializado. Disfruta de ingresar en el mundo Mercedes-Benz.</p>   
  
            </div>
  
          </div>
        </div>
  
        <div class="container">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
              <img src="images/repuestos.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
            </div>
            <div class="col-lg-6">
              <h1 class="display-5 fw-bold lh-1 mb-3">Repuestos</h1> 
              <p class="lead">Los repuestos originales Mercedes-Benz son fabricados de acuerdo a los m??s rigurosos par??metros de calidad. Todas las etapas de producci??n son controladas y medidas para que nada afecte la eficiencia de las piezas. De esta manera, es posible asegurar el m??ximo desempe??o, econom??a, seguridad y durabilidad de los veh??culos. Los repuestos originales aumentan los intervalos entre cada mantenimiento y valorizan los veh??culos al preservar sus caracter??sticas originales.</p>
           
            </div>
          </div>
        </div>
  
        <div class="container">
          <div class="row flex-lg-row align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
              <img src="images/servicio.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
            </div>
            <div class="col-lg-6">
              <h1 class="display-5 fw-bold lh-1 mb-3">Servicio t??cnico</h1>
              <p class="lead">Contamos con equipos de profesionales experimentados y continuamente entrenados, stock propio de piezas y herramientas especiales para cada tipo de veh??culo y reparaci??n.
  
                A trav??s del exclusivo sistema StarDiagnosis, en pocos minutos, nuestros t??cnicos certificados consiguen detectar cualquier anomal??a, para luego realizar el servicio o la reparaci??n correspondiente. 
                
                Extienda la vida ??til de su veh??culo realizando los servicios de mantenimiento en nuestros talleres oficiales Mercedes-Benz.</p>
            </div>
          </div>
        </div>
  
        <div class="container py-5">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
              <img src="images/accesorios.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
            </div>
            <div class="col-lg-6">
              <h1 class="display-5 fw-bold lh-1 mb-3">Accesorios</h1>
              <p class="lead">En la gama de accesorios originales Mercedes-Benz encontrar?? un amplio surtido de productos a medida que hacen de cualquier Mercedes-Benz un veh??culo inconfundible.
  
                Consulte en su concesionario oficial o a trav??s del formulario de contacto, que lo asesoraremos sobre los accesorios que har??n de su Mercedes-Benz un veh??culo a??n m??s ??nico.</p>
       
            </div>
          </div>
        </div>
      </section>
    )
}
export default HomePage;