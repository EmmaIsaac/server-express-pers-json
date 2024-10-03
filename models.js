import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { randomUUID, createHash } from "node:crypto";
import dotenv from "dotenv";

dotenv.config();
const PATH_FILE_CARS = process.env.PATH_FILE_CARS;

const getCars = (url) => {
  const exists = existsSync(url);

  if (!exists) {
    writeFileSync(url, JSON.stringify([]));
    return [];
  }

  const cars = JSON.parse(readFileSync(url));
  return cars;
};

const getCarById = (id) => {
  const cars = getCars(PATH_FILE_CARS);
  const car = cars.find((car) => car.id === id);

  return car;
};

export { getCars, getCarById };
