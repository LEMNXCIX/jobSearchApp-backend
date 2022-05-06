const express = require("express");
const VacanteService = require("../services/vacante");

function vacantes(app) {
  const router = express.Router();
  const vacServ = new VacanteService();

  app.use("/api/vacante", router);

  //POST crear vacante
  router.post("/", async (req, res) => {
    const vacante = await vacServ.create(req.body);
    return res.json(vacante);
  });

  //GET obtener todas las vacantes
  router.get("/", async (req, res) => {
    const vacantes = await vacServ.getAll();
    return res.json(vacantes);
  });

  //GET ONE para una sola vacante
  router.get("/:id", async (req, res) => {
    const vacante = await vacServ.getOne(req.params.id);
    return res.json(vacante);
  });

  //PUT actualizar una vacante
  router.put("/:id", async (req, res) => {
    const vacante = await vacServ.update(req.params.id, req.body);
    return res.json(vacante);
  });

  //DELETE eliminar una vacante
  router.delete("/:id", async (req, res) => {
    const vacante = await vacServ.delete(req.params.id);
    return res.json(vacante);
  });
}


module.exports = vacantes;
