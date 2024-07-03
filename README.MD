# Star Wars - API

<p align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" width="300" alt="Star Wars - API"/>
</p>

## Introducción

Star Wars - API es un sistema desarrollado utilizando tecnologías modernas como Express, TypeScript, Node Js. La plataforma permite a los usuarios acceder a los personajes y vehículos de esta mística saga.

## Tecnologías Utilizadas

- Express
- TypeScript
- Node Js

## Instalación y Ejecución

Para comenzar a utilizar Star Wars - API en tu entorno local, sigue los siguientes pasos:

1. Clona el repositorio desde [https://github.com/facundo-monllor/Star-Wars-API].
2. Abre una terminal y navega hasta la ubicación del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:

```bash
$ npm install
```

Después de la instalación, inicia el servidor de desarrollo con:

```bash
$ npm run dev
```

Abre tu navegador y visita http://localhost:3001 para acceder a la API.

## Rutas Disponibles

### Personajes

- **Endpoint:** `/api/people`
- **Método:** GET
- **Descripción:** Esta ruta devuelve una matriz que contiene todos los personajes.

- **Endpoint:** `/api/people/:characterID`
- **Método:** GET
- **Descripción:** Esta ruta devuelve un objeto con la información de un personaje específico identificado por el parámetro characterID.

### Vehículos

- **Endpoint:** `/api/vehicle`
- **Método:** GET
- **Descripción:** Esta ruta devuelve una matriz que contiene todos los vehículos.

- **Endpoint:** `/api/vehicle/:characterID`
- **Método:** GET
- **Descripción:** Esta ruta devuelve un objeto con la información de un vehículo específico identificado por el parámetro vehicleID.

## Repositorio

- https://github.com/facundo-monllor/Star-Wars-API