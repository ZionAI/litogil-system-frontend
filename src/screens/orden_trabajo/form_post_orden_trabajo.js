import React, { useEffect, useState } from "react";
import { TextField, Button, MenuItem, FormControl, Grid } from "@mui/material";
import "./orden_trabajo.css";

// Services
import { lista_clientes } from "../../services/clientes";
import { lista_productos } from "../../services/productos";
import {
  status_orden_trabajo,
  agregar_orden_trabajo,
} from "../../services/orden-trabajo";

const FormOrdenTrabajo = () => {
  const [formData, setFormData] = useState({
    clientes: [],
    productos: [],
    status: [],
    id_cotizacion: 1,
    producto: "",
    status_seleccionado: "",
    id_orden_compra: 1,
    cantidad: 1,
    cliente: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((pastData) => ({
      ...pastData,
      [name]: value,
    }));
  };

  // Carga Clientes
  useEffect(() => {
    lista_clientes().then((r) => {
      setFormData((pastData) => ({
        ...pastData,
        clientes: r.data,
      }));
    });
  }, []);

  // Estatus Orden Trabajo
  useEffect(() => {
    status_orden_trabajo().then((r) => {
      setFormData((pastData) => ({
        ...pastData,
        status: r.data,
      }));
    });
  }, []);

  //   Carga Productos por cliente
  useEffect(() => {
    if (formData.cliente !== "") {
      lista_productos(formData.cliente).then((r) => {
        setFormData((pastData) => ({
          ...pastData,
          productos: r.data,
        }));
      });
    }
  }, [formData.cliente]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let payload = {
      id_orden_compra: formData.id_orden_compra,
      cantidad: formData.cantidad,
      cliente: formData.cliente,
      producto: formData.producto,
      status: formData.status_seleccionado
    }
    agregar_orden_trabajo(payload).then((r)=>{
      alert("orden de tabajo guardada exitosamente")
    })
  };

  return (
    <div className="image_bg_orden">
      <h2>Nueva Orden de Trabajo</h2>
      <FormControl fullWidth onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              value={formData.cliente}
              onChange={handleInputChange}
              select
              label="Cliente"
              name="cliente"
              required
              fullWidth
            >
              {formData.clientes.map((option) => (
                <MenuItem key={option.id_cliente} value={option.id_cliente}>
                  {option.nombre_cliente}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={6}>
            <TextField
              value={formData.producto}
              onChange={handleInputChange}
              select
              label="Producto"
              name="producto"
              required
              fullWidth
            >
              {formData.productos.map((option) => (
                <MenuItem key={option.id_producto} value={option.id_producto}>
                  {option.nombre}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={4}>
            <TextField
              label="Orden de compra"
              name="id_orden_compra"
              value={formData.id_orden_compra}
              onChange={handleInputChange}
              fullWidth
              type="number"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Cantidad"
              name="cantidad"
              value={formData.cantidad}
              onChange={handleInputChange}
              fullWidth
              type="number"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Status"
              name="status_seleccionado"
              value={formData.status_seleccionado}
              onChange={handleInputChange}
              select
              required
              style={{ textTransform: "capitalize" }}
              fullWidth
            >
              {formData.status.map((option) => (
                <MenuItem
                  key={option.clave}
                  value={option.id}
                  style={{ textTransform: "capitalize" }}
                >
                  {option.nombre}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              fullWidth
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </FormControl>
    </div>
  );
};

export default FormOrdenTrabajo;
