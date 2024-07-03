const { getConnection } = require("../../db");
const { formatDateToDB, generateError } = require("../../helpers");

const { editEntrySchema } = require("../../validators/diaryValidators");

async function editEntry(req, res, next) {
  let connection;

  try {
    connection = await getConnection();

    await editEntrySchema.validateAsync(req.body);

    // Sacamos los datos
    const { date, description, place } = req.body;
    const { id } = req.params;

    // Seleccionar datos actuales de la entrada
    const [current] = await connection.query(
      `
    SELECT id, date, description, place, user_id
    FROM diary
    WHERE id=?
  `,
      [id]
    );

    const [currentEntry] = current;

    if (currentEntry.user_id !== req.auth.id && req.auth.role !== "admin") {
      throw generateError("No tienes permisos para editar esta entrada", 403);
    }

    // Ejecutar la query de edición de la entrada
    await connection.query(
      `
      UPDATE diary SET date=?, place=?, description=?, lastUpdate=UTC_TIMESTAMP
      WHERE id=?
    `,
      [formatDateToDB(date), place, description, id]
    );

    // Devolver resultados
    res.send({
      status: "ok",
      data: {
        id,
        date,
        place,
        description,
      },
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
}

module.exports = editEntry;
