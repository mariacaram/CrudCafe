import React from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useState } from "react";
import { campoRequerido, rangoNumero } from "../helpers/helpers";
const AgregarProducto = () => {
  const [nombreProducto, setProducto] = useState("");
  const [precioProducto, setPrecio] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState (false)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      campoRequerido(nombreProducto) &&
      rangoNumero(precioProducto) &&
      campoRequerido(categoria)
    ) {
      console.log("Aqui debería crear el producto");
      setError(false)
    } else {
      console.log("Aqui debería mostrar error");
      setError (true)
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
      {error === true ?       <Alert variant='danger'>
Alguno de los datos no está completados o el precio supera el máximo    </Alert> : null}

    </Container>
  );
};

export default AgregarProducto;
