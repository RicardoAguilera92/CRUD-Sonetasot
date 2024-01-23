const { Router } = require("express");
const pool = require("../db");

const {
  getAllCurps,
  getCurp,
  createCurp,
  deleteCurp,
  updateCurp,
} = require("../controllers/controller");

const router = Router();

router.get("/curp", getAllCurps);

router.get("/curp/:id", getCurp);

router.post("/curp", createCurp);

router.delete("/curp/:id", deleteCurp);

router.put("/curp/:id", updateCurp);

module.exports = router;
