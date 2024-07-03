'use strict';
const getDB = require('../../DDBB/db');
const { savePhoto } = require('../../utility');

const addEntryPhoto = async (req, res, next) => {
  let connection;

  try {
    connection = await getDB();

    const { id } = req.params;

    // miro cuantas fotos tiene la entrada actualmente
    const [currentPhotos] = await connection.query(
      `
      SELECT id FROM photos WHERE entry_id=?
    `,
      [id]
    );

    // Si tiene 3 o más fotos devuelvo un error
    if (currentPhotos.length >= 3) {
      const error = new Error(
        'No puedes subir más fotos a esta entrada, ya tiene 3'
      );
      error.httpStatus = 403;
      throw error;
    }

    let savedPhoto;

    if (req.files && Object.keys(req.files).length > 0) {
      // guardo la foto en disco y saco el nombre con el que la guardé
      console.log(Object.values(req.files)[0]);
      savedPhoto = await savePhoto(Object.values(req.files)[0]);

      // Añado en la tabla de photos una nueva entrada
      await connection.query(
        `
      INSERT INTO photos(photo, entry_id)
      VALUES (?, ?)
      `,
        [savedPhoto, id]
      );
    }

    res.send({
      status: 'ok',
      data: {
        photo: savedPhoto,
      },
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = addEntryPhoto;
