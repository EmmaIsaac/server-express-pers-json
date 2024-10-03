import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { randomUUID } from "node:crypto";
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

const addCar = (brand, model, year) => {
  const cars = getCars(PATH_FILE_CARS);

  const newCar = {
    id: randomUUID(),
    brand,
    model,
    year: Number(year),
  };

  cars.push(newCar);

  writeFileSync(PATH_FILE_CARS, JSON.stringify(cars));
  return newCar;
};

const updateCar = (id, brand, model, year) => {
  const cars = getCars(PATH_FILE_CARS);

  const foundCar = cars.find((car) => car.id === id);

  if (brand) foundCar.brand = brand;
  if (model) foundCar.model = model;
  if (year) foundCar.year = Number(year);

  writeFileSync(PATH_FILE_CARS, JSON.stringify(cars));
  return foundCar;
};

const deleteCar = (id) => {
  const cars = getCars(PATH_FILE_CARS);
  const carToDelete = getCarById(id);

  const filteredCars = cars.filter((car) => car.id !== id);

  writeFileSync(PATH_FILE_CARS, JSON.stringify(filteredCars));
  return carToDelete;
};

export { getCars, getCarById, addCar, updateCar, deleteCar };
