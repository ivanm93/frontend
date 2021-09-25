import '../styles/componentes/pages/ContactanosPage.css'

const Contactanos = (props) => {
    return (
        <section>
        <div class="columna left">
          <h2>Dejanos tu mensaje</h2>
          <form action="" method="" class="formulario">
            <p>
              <label for="">Nombre</label>
              <input type="text" name="" id=""/>
            </p>
            <p>
              <label for="">Apellido</label>
              <input type="text" name="" id=""/>
            </p>
            <p>
              <label for="">Email</label>
              <input type="text" name="" id=""/>
            </p> 
             <p>
               <label for="">Telefono</label>
              <input type="text" name="" id=""/>
            </p>
            <p>
              <label for="">Modelo de interes</label>
             <input type="text" name="" id=""/>
           </p>
             <p>
              <label for="comentario">Comentario</label>
    <textarea name="" id="comentario" cols="30" rows="10"></textarea>         
            </p>
            <p class="acciones"><input type="submit" value="enviar"/></p>
          </form>
        </div>
          <div class="columna right">
            <h2>Otras vias de contacto</h2>
            <p>Tambien puedes comunicarte con nosotros:</p>
            <ul>
              <li>Telefono: 555-4657</li>
              <li>Email: contacto@algo.com</li>
              <li>facebook</li>
              <li>twitter</li>
            </ul>
          </div>
      
      </section>
    )
}
export default Contactanos;