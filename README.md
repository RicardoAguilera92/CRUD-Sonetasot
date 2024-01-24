# CRUD-Sonetasot

## CRUD para entrevista en Sonetasot

Proyecto CRUD en react para la creacion de y guardado de CURPS unicas.

Este proyecto esta usando tecnologias como React, NodeJs, postgres, docker. Se adjunta la base de datos y el ENV para
poder ejecutarlo de la manera adecuada.

El programa esta disenado para solo agregar CURPs unicas, si se agrega una similar esta marcara error.

Este programa puede ejecutarse de manera visual o puede ejecutarse con Postman o algun similar para realizar las peticiones a la
API.

Consideraciones:

levantar el entorno Docker mediente

```
docker-compose up
```

ir al bash y ejecutar el comando

```
psql -U postgres
```

para entrar a nuestro contenedor, ahi entraremos a nuestra base de datos llamada curpdb y crearemos la tabla.

Tambien es importante descargar todas las dependencias con el comando

```
npm i
```

dentro de la carpeta raiz como en la carpeta client.

Es necesario tener un plugin que pueda dejar hacer peticiones CORS como "Allow CORS" para instalarlo en el navegador.


