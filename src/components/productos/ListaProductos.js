import React from "react";
import { Container, ListGroup, Button } from "react-bootstrap";
import ItemProducto from "./ItemProducto";

const ListaProductos = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">Lista de productos</h1>
      <hr />
      <article className="d-flex align-items-center mb-4 justify-content-end">
        <p className="my-0 me-4 fw-bold">Agregar nuevos productos: </p>
        <Button variant="primary" onClick={handleShow}>
          Agregar
        </Button>
      </article>
      <ListGroup>
        {props.productos.map(() => (
          <ItemProducto></ItemProducto>
        ))}
      </ListGroup>
    </Container>
  );
};

export default ListaProductos;
