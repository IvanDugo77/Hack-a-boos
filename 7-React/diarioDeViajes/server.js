'use strict';

// importo y configuro dotenv para
// aceder a las variables de entorno definidas en .env
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const fileUpload = require('express-fileupload');

const {
  getEntry,
  listEntries,
  deleteEntry,
  createEntry,
  voteEntry,
  modifyEntry,
  deleteEntryPhoto,
  addEntryPhoto,
} = require('./controllers/entries');

const {
  createUser,
  loginUser,
  validateUser,
  infoUser,
  deleteUser,
  modifyPwd,
  editUser,
  recorverUserPassword,
  resetUserPassword,
} = require('./controllers/users');
const isUser = require('./middlewares/isUser');
const userExists = require('./middlewares/userExists');
const entryExists = require('./middlewares/entryExists');
const canEdit = require('./middlewares/canEdit');
const { createStaticDir } = require('./utility');

const { PORT } = process.env;

// creo una instancia de express
const app = express();

// middleware cors (para aceptar futuras peticiones desde front React)
app.use(cors());

// middleware JSON parse body
app.use(express.json());

// middleware recursos staticos
// Ej: http://localhost:4000/foto.jpg
const staticDirPath = path.join(__dirname, process.env.UPLOADS_DIRECTORY);

app.use(express.static(staticDirPath));

// Creo el directorio statico si no existe
createStaticDir(staticDirPath);

// middleware para parsear los ficheros en el body (alternativa: multer)
app.use(fileUpload());

// añado middleware morgan para hacer un log de las peticiones que me llegan
app.use(morgan('dev'));

/*
 ****
 **** End-points USERS
 ****
 */
// POST - /users - Crear un usuario pendiente de activar
app.post('/users', createUser);
// POST - /users/login - Hará el login de un usuario y devolverá el TOKEN
app.post('/users/login', loginUser);
//  GET - /users/validate/:registrationCode - Validará un usuario recien registrado
app.get('/users/validate/:registrationCode', validateUser);
// GET - /users/:id - Devolver información del usuario | Token obligatorio y si el usuario coincide dar más información
app.get('/users/:id', userExists, isUser, infoUser);
// DELETE - /users/:id - Borrar un usuario | Solo lo puede hacer el admin o mismo usuario
app.delete('/users/:id', userExists, isUser, deleteUser);
// PATCH - /users/:id/password - Editar la contraseña de un usuario | Solo el propio usuario necesita TOKEN
app.patch('/users/password', isUser, modifyPwd);
// PATCH - /users/:id - Editar un usuario (name, email, avatar) | Solo el propio usuario
app.patch('/users/:id', userExists, isUser, editUser);
// POST - /users/recover-password - Pide un correo electronico donde se pasará un código de recover
app.post('/users/recover-password', recorverUserPassword);
// POST - /users/reset-password - Pide código de recover y nueva password
app.post('/users/reset-password', resetUserPassword);

/*
 ****
 **** End-points ENTRIES
 ****
 */
// POST - /entries - crea una entrada | Token obligatorio
app.post('/entries', isUser, createEntry);
//  GET - /entries - JSON con lista todas las entradas y buscar entradas | Sin token
app.get('/entries', listEntries);
// GET - /entries/:id - JSON que muestra información de una entrada | Sin token
// id es un path param (Ej: http://127.0.0.1:4000/entries/13)
app.get('/entries/:id', entryExists, getEntry);
// POST - /entries/:id/votes - vota una entrada | Token obligatorio pero cada usuario solo puede
app.post('/entries/:id/votes', isUser, entryExists, voteEntry);
// DELETE - /entries/:id - borra una entrada | Token obligatorio y mismo usuario (o admin)
app.delete('/entries/:id', isUser, entryExists, canEdit, deleteEntry);
//PATCH - /entries/:id - edita el lugar o descripción de una entrada | Token obligatorio y mismo usuario (o admin)
app.patch('/entries/:id', isUser, entryExists, canEdit, modifyEntry);
// DELETE - /entries/:id/photos/:photoID - borra una imagen de una entrada
app.delete(
  '/entries/:id/photos/:photoID',
  isUser,
  entryExists,
  canEdit,
  deleteEntryPhoto
);
// POST - /entries/:id/photos - añade una imagen a una entrada | Token obligatorio y mismo usuario (o admin)
app.post('/entries/:id/photos', isUser, entryExists, canEdit, addEntryPhoto);

// middleware de los errores
app.use((error, req, res, next) => {
  res.status(error.httpStatus || 500).send({
    status: 'error',
    message: error.message,
  });
});

// middleware 404, endpoint no encontrado
app.use((req, res) => {
  res.status(404).send({
    status: 'error',
    message: 'Not found',
  });
});

// pongo en escucha express
app.listen(PORT, () => {
  console.log(`Servidor en http://127.0.0.1:${PORT}`);
});
