# API de Express con Persistencia en Archivo JSON

Este proyecto es una API simple construida con Express para administrar un catalogo de Autos. La información se persiste en un archivo JSON que funciona como base de datos. La API permite realizar operaciones CRUD: obtener todo el catalogo, obtener un elemento por ID, agregar nuevos elementos, actualizar un elemento y eliminar elementos.

## Instalación

### Requisitos previos

- Node.js (versión 14 o superior)
- npm (viene con Node.js)

### Clonar el repositorio

```bash
git clone https://github.com/EmmaIsaac/server-express-pers-json.git
cd server-express-pers-json
```

### Instalar las dependencias

Una vez dentro de la carpeta del proyecto, ejecuta el siguiente comando para instalar las dependencias:

```bash
npm install
```

## Uso

### Iniciar la aplicación

Para iniciar el servidor, utiliza el siguiente comando:

```bash
npm run dev
```

Por defecto, el servidor se ejecutará en `http://localhost:3000`.

### Endpoints de la API

| Método | Ruta           | Descripción                                   |
| ------ | -------------- | --------------------------------------------- |
| GET    | `api/cars`     | Obtiene todos los elementos.                  |
| GET    | `api/cars/:id` | Obtiene un elemento específico por su ID.     |
| POST   | `api/cars`     | Crea un nuevo elemento.                       |
| PATCH  | `api/cars/:id` | Actualiza parcialmente un elemento por su ID. |
| DELETE | `api/cars/:id` | Elimina un elemento por su ID.                |

### Ejemplos de uso

#### Obtener todos los elementos

**Solicitud:**

```bash
GET api/cars
```

**Respuesta:**

```json
[
  {
    "id": "f1d5a7f2-e6bc-4e90-8a1e-70a7c57cfcf1",
    "brand": "Tesla",
    "model": "Model 3",
    "year": 2022
  },
  {
    "id": "c2b9c3fa-7c3b-4829-92d2-4b0fa2a1e1a1",
    "brand": "Honda",
    "model": "Civic",
    "year": 2020
  },
  {
    "id": "53b1ebe8-e22b-4e39-9b10-d82b0b78f0d5",
    "brand": "Chevrolet",
    "model": "Virtus",
    "year": 2024
  }
]
```

#### Obtener un elemento por ID

**Solicitud:**

```bash
GET api/cars/c2b9c3fa-7c3b-4829-92d2-4b0fa2a1e1a1
```

**Respuesta:**

```json
{
  "id": "c2b9c3fa-7c3b-4829-92d2-4b0fa2a1e1a1",
  "brand": "Honda",
  "model": "Civic",
  "year": 2020
}
```

#### Crear un nuevo elemento

**Solicitud:**

```bash
POST api/cars

{
  "brand": "Nueva Marca",
  "model": "Nuevo Modelo",
  "year": 2020
}
```

**Respuesta:**

```json
{
  "id": "c2b9c3fa-7c3b-4829-92d2-4b0fa2a1e1a1",
  "brand": "Honda",
  "model": "Civic",
  "year": 2020
}
```

#### Actualizar un elemento parcialmente

**Solicitud:**

```bash
PATCH api/cars/c2b9c3fa-7c3b-4829-92d2-4b0fa2a1e1a1

{
  "brand": "Marca Modificada",

}
```

**Respuesta:**

```json
{
  "id": "c2b9c3fa-7c3b-4829-92d2-4b0fa2a1e1a1",
  "brand": "Toyota - Nueva Marca",
  "model": "Civic",
  "year": 2020
}
```

#### Eliminar un elemento

**Solicitud:**

```bash
DELETE api/cars/c2b9c3fa-7c3b-4829-92d2-4b0fa2a1e1a1
```

**Respuesta:**

```json
{
  "id": "c2b9c3fa-7c3b-4829-92d2-4b0fa2a1e1a1",
  "brand": "Honda",
  "model": "Civic",
  "year": 2020
}
```

## Dependencias

- **Express**: Framework de Node.js utilizado para crear la API.
- **fs**: Módulo de Node.js utilizado para leer y escribir en el archivo JSON.

## Licencia

Este proyecto está bajo la licencia MIT.
