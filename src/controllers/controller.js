const pool = require("../db");

const getAllCurps = async (req, res) => {
  try {
    const allCurps = await pool.query("SELECT * FROM person");
    res.send(allCurps.rows);
  } catch (error) {
    console.log(error.message);
  }
};

const getCurp = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM person WHERE id = $1", [id]);

    if (result.rows.length === 0)
      return res.status(404).json({
        message: "Curp no encontrada",
      });

    res.json(result.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
};

const createCurp = async (req, res) => {
  const { nombre, curp, fecha } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO person (nombre, curp, fecha) VALUES ($1, $2, $3) RETURNING *",
      [nombre, curp, fecha]
    );

    res.json(result.rows[0]);
  } catch (error) {
    res.json({ error: error.message });
  }
};

const deleteCurp = async (req, res) => {
  const { id } = req.params;

  const result = await pool.query("DELETE FROM person WHERE id = $1", [id]);

  if (result.rowCount === 0) {
    return res.status(404).json({
      message: "Curp no encontrada",
    });
  }
  return res.sendStatus(204);
};

const updateCurp = async (req, res) => {
  const { id } = req.params;
  const { nombre, curp, fecha } = req.body;

  const result = await pool.query(
    "UPDATE person SET nombre = $1, curp=$2, fecha=$3 WHERE id = $4 RETURNING *",
    [nombre, curp, fecha, id]
  );

  if (result.rows.length === 0) {
    return res.status(404).json({
      message: "Curp no encontrada",
    });
  }
  return res.json(result.rows[0]);
};

module.exports = {
  getAllCurps,
  getCurp,
  createCurp,
  deleteCurp,
  updateCurp,
};
