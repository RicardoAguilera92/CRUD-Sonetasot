import { useEffect, useState } from "react";
import { Card, CardContent, Typography, Button} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CurpList() {
  const [curps, setCurps] = useState([]);
  const navigate = useNavigate();

  const loadCurps = async () => {
    const response = await fetch("http://localhost:4000/curp");
    const data = await response.json();
    setCurps(data);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:4000/curp/${id}`, {
        method: "DELETE",
      });

      setCurps(curps.filter((curp) => curp.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadCurps();
  }, []);

  return (
    <>
      <h1> Listado de Curps</h1>
      {curps.map((curp) => (
        <Card
          style={{
            marginBottom: ".7rem",
            backgroundColor: "#1e272e",
          }}
          key={curp.id}
        >
          <CardContent
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ color: "white" }}>
              <Typography>{curp.nombre}</Typography>
              <Typography>{curp.curp}</Typography>
              <Typography>{curp.fecha}</Typography>
            </div>

            <div>
              <Button
                variant="contained"
                color="inherit"
                onClick={() => navigate(`/curp/${curp.id}/editar`)}
              >
                Editar
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => handleDelete(curp.id)}
                style={{ marginLeft: ".5rem" }}
              >
                Eliminar
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
