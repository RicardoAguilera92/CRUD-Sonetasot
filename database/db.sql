CREATE DATABASE curpdb

CREATE TABLE curp
(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    curp VARCHAR(255) UNIQUE NOT NULL ,
    fecha DATE NOT NULL
);
