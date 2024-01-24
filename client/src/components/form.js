import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  TextField,
  CircularProgress,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Form() {
  const [curp, setCurp] = useState({
    nombre: "",
    curp: "",
    fecha: "",
  });
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);

  const navigate = useNavigate();
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    if (editing) {
      const response = await fetch(`http://localhost:4000/curp/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "aplication/json",
        },
        body: JSON.stringify(curp),
      });
      const data = await response.json();
      console.log(data);
    } else {
      await fetch("http://localhost:4000/curp", {
        method: "POST",
        body: JSON.stringify(curp),
        headers: { "Content-Type": "application/json" },
      });
    }

    setLoading(false);
    navigate("/");
  };

  const handleChange = (e) => {
    setCurp({ ...curp, [e.target.name]: e.target.value });
  };

  const loadCurp = async (id) => {
    const res = await fetch(`http://localhost:4000/curp/${id}`);
    const data = await res.json();
    setCurp({ nombre: data.nombre, curp: data.curp, fecha: data.fecha });
    setEditing(true);
  };

  useEffect(() => {
    if (params.id) {
      loadCurp(params.id);
    }
  }, [params.id]);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={3}>
        <Card
          sx={{ mt: 5 }}
          style={{
            backgroundColor: "#1e272e",
            padding: "1rem",
          }}
        >
          <Typography variant="5" textAlign="center" color="white">
            {editing ? "Editar Curp" : "Agregar Curp"}
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="filled"
                label="Nombre"
                sx={{ display: "block", margin: ".5rem 0" }}
                name="nombre"
                value={curp.nombre}
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <TextField
                variant="filled"
                label="CURP"
                rows={4}
                sx={{ display: "block", margin: ".5rem 0" }}
                name="curp"
                value={curp.curp}
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />

              <input
                type="date"
                label="Fecha"
                rows={3}
                sx={{ display: "block", margin: ".5rem 0" }}
                name="fecha"
                value={curp.fecha}
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <div style={{ marginTop: "2rem" }}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={!curp.nombre || !curp.curp || !curp.fecha}
                >
                  {loading ? (
                    <CircularProgress color="inherit" size={24} />
                  ) : (
                    "Guardar"
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
