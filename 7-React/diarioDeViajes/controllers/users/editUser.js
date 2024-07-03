'use strict';
const { v4: uuidv4 } = require('uuid');

const getDB = require('../../DDBB/db');
const { savePhoto, sendMail } = require('../../utility');

const editUser = async (req, res, next) => {
  let connection;

  try {
    connection = await getDB();

    // Cosas que podemos editar: email, nombre, avatar
    // Sacar id de req.params
    const { id } = req.params; // este es el id de usuario que queremos editar

    // Sacar name y email de req.body
    const { name, email } = req.body;

    // Comprobar que el usuario que queremos editar es el mismo del token o somos administradores
    if (req.userInfo.id !== Number(id) && req.userInfo.role !== 'admin') {
      const error = new Error('No tienes permisos para editar este usuario');
      error.httpStatus = 403;
      throw error;
    }

    // Sacar la información actual del usuario en la base de datos
    const [currentUser] = await connection.query(
      `
      SELECT email
      FROM users
      WHERE id=?
    `,
      [id]
    );

    if (req.files && req.files.avatar) {
      // Se está subiendo un avatar
      const userAvatar = await savePhoto(req.files.avatar);

      await connection.query(
        `
        UPDATE users
        SET avatar=?
        WHERE id=?
      `,
        [userAvatar, id]
      );
    }

    // Si el email enviado es diferente al de la base de datos procesar el nuevo email
    if (email && email !== currentUser[0].email) {
      // Comprobar que no exista otro usuario con el nuevo email
      const [existingEmail] = await connection.query(
        `
        SELECT id
        FROM users
        WHERE email=?
      `,
        [email]
      );

      if (existingEmail.length > 0) {
        const error = new Error(
          'Ya existe un usuario con el email proporcionado en la base de datos'
        );
        error.httpStatus = 409;
        throw error;
      }

      // Creo un código de registro (contraseña temporal de un solo uso)
      // genero regCode
      const regCode = uuidv4();

      // Mando un mail al usuario con el link de confirmación de email
      const emailBody = `
        Acabas de modificar tu email en la app de Diario de Viajes. 
        Pulsa en este link para validar tu nuevo email: ${process.env.PUBLIC_HOST}${regCode}
      `;

      //await sendMail(email, 'Confirma tu nuevo email', emailBody);

      // Actualizar los datos finales

      await connection.query(
        `
        UPDATE users
        SET name=?, email=?, lastAuthUpdate=?, active=0, regCode=?
        WHERE id=?
      `,
        [name, email, new Date(), regCode, id]
      );

      // Dar una respuesta
      res.send({
        status: 'ok',
        message:
          'Datos de usuario actualizados. Mira tu email para validar la nueva dirección',
      });
    } else {
      await connection.query(
        `
        UPDATE users
        SET name=?
        WHERE id=?
      `,
        [name, id]
      );

      res.send({
        status: 'ok',
        message: 'Datos de usuario actualizados',
      });
    }
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = editUser;
