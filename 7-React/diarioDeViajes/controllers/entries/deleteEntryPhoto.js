'use strict';
const getDB = require('../../DDBB/db');
const { deletePhoto } = require('../../utility');

const deleteEntryPhoto = async (req, res, next) => {
  let connection;

  try {
    connection = await getDB();

    const { id, photoID } = req.params;

    // Selecciono la foto de la base de datos
    const [current] = await connection.query(
      `
      SELECT photo FROM photos
      WHERE id=? AND entry_id=?
    `,
      [photoID, id]
    );

    // Si la foto no existe devuelvo un error
    if (current.length === 0) {
      const error = new Error('La foto no existe');
      error.httpStatus = 404;
      throw error;
    }

    // Borrar la foto de disco
    await deletePhoto(current[0].photo);

    // Borrar la foto de la base de datos
    await connection.query(
      `
      DELETE FROM photos
      WHERE id=? AND entry_id=?
    `,
      [photoID, id]
    );

    res.send({
      status: 'ok',
      message: 'Foto borrada',
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = deleteEntryPhoto;
