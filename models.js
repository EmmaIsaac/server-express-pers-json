import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { randomUUID, createHash } from "node:crypto";

const getCars = (url) => {
  const exists = existsSync(url);

  if (!exists) {
    writeFileSync(url, JSON.stringify([]));
    return [];
  }

  const cars = JSON.parse(readFileSync(url));
  return cars;
};

export { getCars };
