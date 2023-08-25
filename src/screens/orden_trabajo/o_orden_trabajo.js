import { Router } from "react-router-dom";
import { Button } from "@mui/material";
import FormOrdenTrabajo from "./form_post_orden_trabajo";
import ListaOrdenTrabajo from "./list_ordenes_trabajo";
import { Grid } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

function OrdenTrabajo() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/home/');
  };

  return (
    <Grid
      style={{ backgroundColor: "white", padding: "20px" }}
      container
      spacing={6}
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={8}>
        <FormOrdenTrabajo />
      </Grid>
      <Grid item xs={8}>
        <ListaOrdenTrabajo />
      </Grid>
      <Grid item xs={8}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleBackClick}
        >
          Regresar
        </Button>
      </Grid>
    </Grid>
  );
}

export default OrdenTrabajo;
