import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./components/pages/Inicio";
import ListaProductos from "./components/productos/ListaProductos";
import Navigation from "./components/common/Navigation";
import Footer from "./components/common/Footer";
import Error404 from "./components/pages/Error404";
import AgregarProducto from "./components/productos/AgregarProducto";
import EditarProducto from "./components/productos/EditarProducto";
import { useState, useEffect } from "react";

function App() {
  const URL = process.env.REACT_APP_API_URL;
  console.log(URL);
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const respuesta = await fetch(URL);
      const datos = await respuesta.json();
      console.log(datos);
      setProductos(datos);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Router>
      <Navigation></Navigation>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route
          exact
          path="/productos"
          element={<ListaProductos productos = {productos} consultarAPI={consultarAPI}></ListaProductos>}
        ></Route>
        <Route
          exact
          path="/nuevo"
          element={<AgregarProducto consultarAPI={consultarAPI}></AgregarProducto>}
        ></Route>
        <Route
          exact
          path="/editar/:id"
          element={<EditarProducto consultarAPI={consultarAPI}></EditarProducto>}
        ></Route>

        <Route exact path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
