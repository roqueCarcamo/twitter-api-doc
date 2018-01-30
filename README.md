# Twitter
Sistema de avisos, donde los usuarios podrán publicar su contenido en un muro público.

# Requsitos
* node js ^8.x.x
* Instalar mongoDB

# Instalador 
Clonar el repositorio : 
git clone https://github.com/roqueCarcamo/twitter.git

# Instalar las dependencias
npm install
 
# Depencias
* "body-parser": "^1.18.2",
* "express": "^4.16.2",
* "morgan": "^1.9.0",
* "winston": "^2.4.0"
* "mongoose": "^5.0.1"

# Correr el proyecto
node index.js 

# Formatos JSON
* Content-Type : application/json

# Guardar Usuario
*Url: http://127.0.0.1:8080/api/users

*Tipo: POST

*JSON: {
	"firstname": "Rodolfo",
	"lastname":"Roque",
	"email":"carcamomesa@gmail.com"
}

*Codigo : 200

* Respuesta Json: {
    "message": "Successfully created user",
    "content": {
        "status": true,
        "_id": "5a6438a34b40da33202342b7",
        "firstname": "Luis",
        "lastname": "Mesa",
        "email": "mesaLuis@gmail.com",
        "createdAt": "2018-01-21T06:52:19.612Z",
        "updatedAt": "2018-01-21T06:52:19.612Z",
        "__v": 0
    }
}

Tipo datos: 
* firstname = String (Requerido)
* lastname = String (Requerido)
* email = String (Requerido)

# Consultar Usuario por Id
*Url: http://127.0.0.1:8080/api/users/:Id

*Tipo: GET

*JSON: Ninguno.

:Id = Id del usuario creado. (Requerido)

*Codigo : 200

* Respuesta Json:
{
    "status": true,
    "_id": "5a6438a34b40da33202342b7",
    "firstname": "Luis",
    "lastname": "Mesa",
    "email": "mesaLuis@gmail.com",
    "createdAt": "2018-01-21T06:52:19.612Z",
    "updatedAt": "2018-01-21T06:52:19.612Z",
    "__v": 0
}

# Listar Usuarios
*Url: http://127.0.0.1:8080/api/users

*Tipo: GET

*JSON: Ninguno.

*limit=Cantidad final de registros
*skip=Cantidad inicial de registros

*Codigo : 200

* Respuesta Json:
{
    "users": [
        {
            "status": true,
            "_id": "5a641a7fe8bcb529ac475562",
            "firstname": "Pedro",
            "lastname": "Luis",
            "email": "carcamomesa@gmail.com",
            "createdAt": "2018-01-21T04:43:43.634Z",
            "updatedAt": "2018-01-21T04:43:43.634Z",
            "__v": 0
        },
        {
            "status": true,
            "_id": "5a641e9fe39bb92ad8ace6b6",
            "firstname": "Rodolfo",
            "lastname": "Roque",
            "email": "carcamomesa@gmail.com",
            "createdAt": "2018-01-21T05:01:19.956Z",
            "updatedAt": "2018-01-21T05:01:19.956Z",
            "__v": 0
        }
    ],
    "limit": 10,
    "skip": 0
}]
 
# Modificar Usuario por Id
*Url: http://127.0.0.1:8080/api/users/:Id

*Tipo: PUT

*JSON: {
	"firstname": "Marcos",
	"lastname": "Robles",
	"email":"roblesMarcos@gmail.com"
}

:Id = Id del usuario creado. (Requerido)

Tipo datos: 
* firstname = String
* lastname = String 
* email = String

*Codigo : 200

* Respuesta Json:
{
    "message": "Successfully modified user",
    "content": {
        "status": false,
        "_id": "5a6438a34b40da33202342b7",
        "firstname": "Marcos",
        "lastname": "Robles",
        "email": "roblesMarcos@gmail.com",
        "createdAt": "2018-01-21T06:52:19.612Z",
        "updatedAt": "2018-01-21T06:55:49.749Z",
        "__v": 0
    }
}

# Eliminar Usuario por Id (Deshabilitar)
*Url: http://127.0.0.1:8080/api/users/:Id

*Tipo: DELETE

*JSON: Ninguno

:Id = Id del usuario creado. (Requerido)

*Codigo : 200

* Respuesta Json:
{
    "message": "User successfully disabled",
    "content": {
        "status": false,
        "_id": "5a6438a34b40da33202342b7",
        "firstname": "Luis",
        "lastname": "Mesa",
        "email": "mesaLuis@gmail.com",
        "createdAt": "2018-01-21T06:52:19.612Z",
        "updatedAt": "2018-01-21T06:54:05.502Z",
        "__v": 0
    }
}

# Guardar Anuncio
*Url: http://127.0.0.1:8080/api/tweets

*Tipo: POST

*JSON: {
	"content": "Nuevo anuncio 1",
	"author":"5a641a7fe8bcb529ac475562",
	"location":"Barranquilla"
}

*Codigo : 200

* Respuesta Json: 
{
    "message": "Successfully created tweet",
    "content": {
        "_id": "5a643b01cbd91d2618e310b2",
        "content": "Nuevo anuncio 1",
        "author": "5a641a7fe8bcb529ac475562",
        "location": "Barranquilla",
        "createdAt": "2018-01-21T07:02:25.133Z",
        "updatedAt": "2018-01-21T07:02:25.133Z",
        "__v": 0
    }
}

Tipo datos: 
* content = String (Requerido)
* author = String (Id del usuario creado) (Requerido)
* location = String (Requerido)

# Consultar Anuncio por Id
*Url: http://127.0.0.1:8080/api/tweets/:Id

*Tipo: GET

*JSON: Ninguno.

:Id = Id del anuncio creado. (Requerido)

*Codigo : 200

* Respuesta Json:
{
    "_id": "5a643b01cbd91d2618e310b2",
    "content": "Nuevo anuncio 1",
    "author": "5a641a7fe8bcb529ac475562",
    "location": "Barranquilla",
    "createdAt": "2018-01-21T07:02:25.133Z",
    "updatedAt": "2018-01-21T07:02:25.133Z",
    "__v": 0
}

# Listar Anuncios
*Url: http://127.0.0.1:8080/api/tweets

*Tipo: GET

*JSON: Ninguno.

*limit=Cantidad final de registros
*skip=Cantidad inicial de registros

*Codigo : 200

* Respuesta Json:
{
    "twests": [
        {
            "_id": "5a642ffe0d8fb91fcc3357c2",
            "content": "Nuevo anuncio 2",
            "author": {
                "status": true,
                "_id": "5a641a7fe8bcb529ac475562",
                "firstname": "Pedro",
                "lastname": "Luis",
                "email": "carcamomesa@gmail.com",
                "createdAt": "2018-01-21T04:43:43.634Z",
                "updatedAt": "2018-01-21T04:43:43.634Z",
                "__v": 0
            },
            "location": "Barranquilla",
            "createdAt": "2018-01-21T06:15:26.468Z",
            "updatedAt": "2018-01-21T06:15:26.468Z",
            "__v": 0
        }
    ],
    "limit": 10,
    "skip": 0
}
 
# Modificar Anuncio por Id
*Url: http://127.0.0.1:8080/api/tweets/:Id

*Tipo: PUT

*JSON: {
	"content": "Anuncion modificado",
	"author":"5a641a7fe8bcb529ac475562",
	"location":"Sincelejo"
}

:Id = Id del anuncio creado. (Requerido)

Tipo datos: 
* content = String 
* author = String (Id del usuario creado) 
* location = String

*Codigo : 200

* Respuesta Json:
{
    "message": "Successfully modified tweet",
    "content": {
        "_id": "5a643b01cbd91d2618e310b2",
        "content": "Anuncion modificado",
        "author": "5a641a7fe8bcb529ac475562",
        "location": "Sincelejo",
        "createdAt": "2018-01-21T07:02:25.133Z",
        "updatedAt": "2018-01-21T07:05:04.054Z",
        "__v": 0
    }
}

# Eliminar Anuncio por Id
*Url: http://127.0.0.1:8080/api/tweets/:Id

*Tipo: DELETE

*JSON: Ninguno

:Id = Id del anuncio creado. (Requerido)

*Codigo : 200

* Respuesta Json:
{
    "message": "Successfully deleted tweet",
    "content": {
        "_id": "5a643b01cbd91d2618e310b2",
        "content": "Anuncion modificado",
        "author": "5a641a7fe8bcb529ac475562",
        "location": "Sincelejo",
        "createdAt": "2018-01-21T07:02:25.133Z",
        "updatedAt": "2018-01-21T07:05:04.054Z",
        "__v": 0
    }
}

# Advertencias

* Cuando no se envian los parametros requeridos (Codigo : 500)

Respuesta Json:
{
    "error": "Error: ValidationError: email: Path `email` is required., lastname: Path `lastname` is required., firstname: Path `firstname` is required."
}

* Cuando se exceden el tamaño de caracteres permitidos (Codigo : 500)

Respuesta Json:
{
    "error": "Error: ValidationError: firstname: Path `firstname` (`Rodolfo Roque Carcamo Mendoza Mesa`) is longer than the maximum allowed length (32)."
}

* Cuando no se encuentra un id de anuncio o usuario (Codigo : 404)

Respuesta Json:
{
    "message": "Id does not exist"
}

# Errores
* Cuando se utiliza una url de un servicio no existente (Codigo : 404)

Respuesta Json: 
{
    "error": "Error. Service not found"
}

* Errores internos en el servidor (Codigo : 500)

Respuesta Json:
{
    "error": Tipo error
}

Autor: Rodolfo Roque Cárcamo Mesa

