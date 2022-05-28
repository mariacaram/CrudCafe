import React from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useState } from "react";
import { campoRequerido, rangoNumero } from "../helpers/helpers";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const AgregarProducto = (props) => {
  const [nombreProducto, setProducto] = useState("");
  const [precioProducto, setPrecio] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState(false);
  const URL = process.env.REACT_APP_API_URL;
  const navigation = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      campoRequerido(nombreProducto) &&
      rangoNumero(precioProducto) &&
      campoRequerido(categoria)
    ) {
      const productoNuevo = {
        nombreProducto,
        precioProducto,
        categoria,
      };
      try {
        const parametros = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(productoNuevo),
        };
        const respuesta = await fetch(URL, parametros);
        console.log(respuesta);
        if (respuesta.status === 201) {
          console.log("El producto se creó correctamente");
          //mostrar cartel al usuario

          Swal.fire(
            "Producto creado!",
            "Acaba de crear un producto",
            "success"
          );
          //resetear formulario luego de presionar guardar
          e.target.reset();
          //consulto api:
          props.consultarAPI();
          //Redireccionar a lista productos
          navigation("/productos");
        } else {
          console.log("mostrar un cartel de error");
        }
      } catch (error) {}
      console.log("Aqui debería crear el producto");
      setError(false);
    } else {
      console.log("Aqui debería mostrar error");
      setError(true);
    }
  };
  return (
    <Container>
      <h1 className="display-3 text-center my-4">Nuevo Producto</h1>
      <hr />
      <Form className="my-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre del producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: café"
            onChange={(e) => setProducto(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="ej: 50"
            onChange={(e) => setPrecio(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select onChange={(e) => setCategoria(e.target.value)}>
            <option value="">Seleccione una opcion</option>
            <option value="bebida-caliente">Bebida Caliente</option>
            <option value="bebida-fria">Bebida Fria</option>
            <option value="sandwich">Sandwich</option>
            <option value="dulce">Dulce</option>
            <option value="salado">Salado</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Guardar
        </Button>
      </Form>
      {error === true ? (
        <Alert variant="danger">
          Alguno de los datos no está completados o el precio supera el máximo{" "}
        </Alert>
      ) : null}
    </Container>
  );
};

export default AgregarProducto;
