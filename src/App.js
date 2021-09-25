
import Header from './componentes/layout/Header'
import Nav from './componentes/layout/Nav'
import Footer from './componentes/layout/Footer'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ContactanosPage from './pages/ContactanosPage';
import HomePage from "./pages/HomePage";
import Nosotros from "./pages/NosotrosPage";
import Productos from "./pages/ProductosPage";

import './App.css';

function App() {
  return (
        <div className="App">

    <Router>
      <Header></Header>
      <Nav></Nav>
      <Switch>
        <Route path = "/" exact component={HomePage} />
        <Route path = "/nosotros" exact component={Nosotros} />
        <Route path = "/productos" exact component={Productos} />
        <Route path = "/contactos" exact component={ContactanosPage} />

      </Switch>
      <Footer></Footer>
    </Router>
    </div>
  );
}
export default App;
