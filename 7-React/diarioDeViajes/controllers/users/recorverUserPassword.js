'use strict';

const { v4: uuidv4 } = require('uuid');

const getDB = require('../../DDBB/db');
const { sendMail } = require('../../utility');

const recorverUserPassword = async (req, res, next) => {
  let connection;

  try {
    connection = await getDB();

    // Sacar de req.body el email a donde enviar la información de cambio de contraseña
    const { email } = req.body;

    // Si no hay email dar un error
    if (!email) {
      const error = new Error('Faltan campos');
      error.httpStatus = 400;
      throw error;
    }

    // Comprobar que el email existe en la base de datos y si no dar un error
    const [currentEmail] = await connection.query(
      `
      SELECT id
      FROM users
      WHERE email=?
    `,
      [email]
    );

    if (currentEmail.length === 0) {
      const error = new Error('No hay ningún usuario registrado con ese email');
      error.httpStatus = 404;
      throw error;
    }

    // Generar una código de recuperación
    const recorverCode = uuidv4();

    // Enviar por mail el código de recuperación
    // Mando un mail al usuario con el link de confirmación de email
    const emailBody = `
        Se solicitó un cambio de contraseña para el usuario registrado con este email en la app Diario de Viajes.
        
        El código de recuperación es: ${recorverCode} 

        Si no fuiste tu el que solicitaste el cambio, por favor ignora este email.
        Puedes hacer login con tu password habitual.

        Gracias!
      `;

    await connection.query(
      `
      UPDATE users
      SET recoverCode=?, lastAuthUpdate=?
      WHERE email=?
    `,
      [recorverCode, new Date(), email]
    );

    /* await sendMail(
      email,
      'Cambio de contraseña en Diario de Viajes',
      emailBody
    ); */

    // Dar una respuesta

    res.send({
      status: 'ok',
      message: 'Email enviado',
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = recorverUserPassword;
