const pool = require("../db");

const getAllCurps = async (req, res, next) => {
  try {
  
    const allCurps = await pool.query("SELECT * FROM curp");
    res.send(allCurps.rows);
  } catch (error) {
    next(error)
  }
};

const getCurp = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM curp WHERE id = $1", [id]);

    if (result.rows.length === 0)
      return res.status(404).json({
        message: "Curp no encontrada",
      });

    res.json(result.rows[0]);
  } catch (error) {
    next(error)
  }
};

const createCurp = async (req, res, next) => {
  const { nombre, curp, fecha } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO curp (nombre, curp, fecha) VALUES ($1, $2, $3) RETURNING *",
      [nombre, curp, fecha]
    );

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const deleteCurp = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query("DELETE FROM curp WHERE id = $1", [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "Curp no encontrada",
      });
    }
    return res.sendStatus(204);
  } catch (error) {
    next(error)
  }

};

const updateCurp = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { nombre, curp, fecha } = req.body;

    const result = await pool.query(
      "UPDATE curp SET nombre = $1, curp=$2, fecha=$3 WHERE id = $4 RETURNING *",
      [nombre, curp, fecha, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Curp no encontrada",
      });
    }
    return res.json(result.rows[0]);
  } catch (error) {
    next(error)
  }
};

module.exports = {
  getAllCurps,
  getCurp,
  createCurp,
  deleteCurp,
  updateCurp,
};
