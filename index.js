import express from "express";
import dotenv from "dotenv";
import { getCars } from "./models.js";

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
//get id
//post
//put
//delete

app.listen(PORT, () => {
  console.log(`Server on listening on port http://localhost:${PORT}`);
});
