const { Router } = require("express");
const { Dog, Temperament } = require("../db");

const router = Router();

router.post("/", async (req, res) => {
  const {
    name,
    min_height,
    max_height,
    min_weight,
    max_weight,
    life_span,
    image,
    temperament,
    createdInDb,
  } = req.body;
  try {
    const dogCreated = await Dog.create({
      name,
      min_height,
      max_height,
      min_weight,
      max_weight,
      life_span,
      image,
      createdInDb, //le paso los mismos atributos del modelo porque lo voy a agregar a la base de datos
    });

    const temperamentDb = await Temperament.findAll({
      where: {
        name: temperament,
      },
    });

    await dogCreated.addTemperament(temperamentDb);
    res.status(201).json({ success: "Dog created succesfully!" });
  } catch (error) {
    res.status(400).json({ error: "Dog can't be created" });
  }
});






module.exports = router;
