import React, { useEffect, useState } from "react";
import { TextField, Button, MenuItem, FormControl, Grid } from "@mui/material";

// Services
import { lista_clientes } from "../../services/clientes";
import { lista_productos } from "../../services/productos";
import { status_orden_trabajo } from "../../services/orden-trabajo";

const FormExampleWithGrid = () => {
  const [formData, setFormData] = useState({
    clientes: [],
    cliente: "",
    producto: "",
    productos: [],
    status: [],
    id_orden_compra: 1,
    cantidad: 1,
    id_cotizacion: 1,
    status_seleccionado: 1,
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
      console.log(formData.productos);
    }
  }, [formData.cliente]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div>
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
              name="status"
              value={formData.status_seleccionado}
              onChange={handleInputChange}
              select
              required
			  style={{textTransform: 'capitalize'}}
			  fullWidth
            >
              {formData.status.map((option) => (
                <MenuItem 
					key={option.clave} 
					value={option.id}
					style={{textTransform: 'capitalize'}}
					
				>
                  {option.nombre}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
			  
            </Button>
          </Grid>
        </Grid>
      </FormControl>
    </div>
  );
};

export default FormExampleWithGrid;
