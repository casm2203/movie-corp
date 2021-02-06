import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Nosotros from "./components/Nosotros";
import Contactanos from "./components/Contactanos";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container m-auto">
        <Route path="/" exact render={Cards} />
        <Route path="/nosotros" render={Nosotros} />
        <Route path="/contactanos" render={Contactanos} />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
