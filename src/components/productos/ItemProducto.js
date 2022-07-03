import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const ItemProducto = (props) => {
  const URL = process.env.REACT_APP_API_URL + "/" + props.producto._id;
  const eliminarProducto = () => {
    console.log(URL);
    Swal.fire({
      title: "Estas seguro que deseas borrar el producto?",
      text: "No podrás recuperar el producto una vez eliminado",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
      // cancelButtonText: "Cancelar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const respuesta = await fetch(URL, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          });
          console.log(respuesta);
          if (respuesta.status === 200) {
            // Asumimos que se borro el producto
            Swal.fire("Borrado", "Producto eliminado", "success");
            props.consultarAPI();
          }
          // Mostrar cartel de error
        } catch (error) {}
      }
    });
  };
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <p>
        {props.producto.nombreProducto}
        <span className="fw-bolder">
          - Precio: ${props.producto.precioProducto}
        </span>
      </p>
      <div>
        <Link
          className="btn btn-warning me-2 "
          to={`/editar/${props.producto._id}`}
        >
          Editar
        </Link>

        <Button variant="danger" onClick={() => eliminarProducto()}>
          Borrar
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default ItemProducto;
