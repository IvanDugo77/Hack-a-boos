'use strict';
const getDB = require('../../DDBB/db');

const deleteUser = async (req, res, next) => {
  let connection;
  try {
    connection = await getDB();

    // Sacamos de req.params el id de usuario que queremos eliminar
    const { id } = req.params;

    // Si la id es igual a 1 deberíamos dar un error
    if (Number(id) === 1) {
      const error = new Error(
        'El administrador principal no se puede eliminar'
      );
      error.httpStatus = 403;
      throw error;
    }

    // Si el usuario que viene del token no tiene rol de admin o no es el usuario que queremos eliminar
    // lanzamos un error
    if (req.userInfo.id !== Number(id) && req.userInfo.role !== 'admin') {
      const error = new Error('No tienes permisos para eliminar este usuario');
      error.httpStatus = 401;
      throw error;
    }

    // Hacemos un update de la tabla de usuarios
    // cambiar la password, borrar el nombre, borrar el avatar, marcar como no activo, marcar como si borrado
    await connection.query(
      `
      UPDATE users
      SET password="[borrado]", name="[borrado]", avatar=NULL, active=0, deleted=1, lastAuthUpdate=?
      WHERE id=?
    `,
      [new Date(), id]
    );

    // Devolvemos respuesta
    res.send({
      status: 'ok',
      message: `El usuario con id: ${id} eliminado`,
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = deleteUser;
