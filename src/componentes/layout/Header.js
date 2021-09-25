import '../../styles/componentes/layout/Header.css';


const Header = (props) => {
    return (
        <header>
        <div id="holder">
        <img src="images/logo.svg" alt="logo estrella"  id="imagen1"/>
        <img src="images/mercedes.svg" alt="logo mercerdes" id="imagen2"/>
        <h2>ConcesionariaX S.A</h2>
        </div>
    </header>
    )
}
export default Header;