import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

import { lista_ordenes_trabajo } from "../../services/orden-trabajo";

function ListaOrdenTrabajo() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    lista_ordenes_trabajo().then((r) => {
      setOrders(r.data);
    });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Fecha </TableCell>
            <TableCell>Cantidad</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map(order => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.created_at}</TableCell>
              <TableCell>{order.cantidad}</TableCell>
              <TableCell>{order.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ListaOrdenTrabajo;
