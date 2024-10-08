import express from "express";
import dotenv from "dotenv";
import { getCars, getCarById, addCar, updateCar, deleteCar } from "./models.js";

const app = express();

app.use(express.json());
dotenv.config();

const PORT = process.env.PORT;
const PATH_FILE_CARS = process.env.PATH_FILE_CARS;

//get
app.get("/api/cars", (req, res) => {
  try {
    res.json(getCars(PATH_FILE_CARS));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
//get by id
app.get("/api/cars/:id", (req, res) => {
  try {
    const { id } = req.params;
    const car = getCarById(id);

    if (!car) return res.status(404).json({ error: "car not found" });

    res.json(car);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
//post
app.post("/api/cars", (req, res) => {
  try {
    const { brand, model, year } = req.body;

    if (!brand || !model || !year) {
      return res.status(400).json({ error: "bad request" });
    }

    const newCar = addCar(brand, model, year);
    res.status(201).json(newCar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
//patch
app.patch("/api/cars/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { brand, model, year } = req.body;

    const car = updateCar(id, brand, model, year);
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
//delete
app.delete("/api/cars/:id", (req, res) => {
  const { id } = req.params;

  const car = getCarById(id);

  if (!car) {
    return res.status(404).json({ error: "car not found" });
  }

  deleteCar(id);
  res.json(car);
});

// Middleware
app.use("*", (req, res) => {
  res.status(404).json({ error: "resource not found" });
});

app.listen(PORT, () => {
  console.log(`Server on listening on port http://localhost:${PORT}`);
});
