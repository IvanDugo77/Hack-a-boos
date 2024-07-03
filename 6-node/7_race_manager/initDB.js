require("dotenv").config();

const { getConnection } = require("./db");
// const { formatDateToDB } = require("./helpers");
// const { random } = require("lodash");
const bcrypt = require('bcrypt');

let connection;

async function main() {
  try {
    // Conseguir conexión a la base de datos
    connection = await getConnection();

    // Borrar las tablas si existen 
    console.log("Borrando tablas");

    await connection.query("DROP TABLE IF EXISTS RaceParticipant");
    await connection.query("DROP TABLE IF EXISTS Participants");
    await connection.query("DROP TABLE IF EXISTS Races");
    await connection.query("DROP TABLE IF EXISTS Users");

    // Crear las tablas de nuevo
    console.log("Creando tablas");

    await connection.query(`
        CREATE TABLE Races (
          id INTEGER PRIMARY KEY AUTO_INCREMENT,
          tipo VARCHAR(50) NOT NULL,
          nombre VARCHAR(100) NOT NULL,
          categoria VARCHAR(50) NOT NULL,
          date DATE NOT NULL
        )
    `)

    await connection.query(`
          CREATE TABLE Users (
            id INTEGER PRIMARY KEY AUTO_INCREMENT,
            email VARCHAR(120) UNIQUE,
            password VARCHAR(120),
            role ENUM('admin', 'user') default 'user',
            name VARCHAR(50) NOT NULL,
            surname VARCHAR(50) NOT NULL,
            gender VARCHAR(50) NOT NULL,
            year SMALLINT NOT NULL
          )
    `)

    await connection.query(`
        CREATE TABLE RaceParticipant (
          id INTEGER PRIMARY KEY AUTO_INCREMENT,
          id_race INTEGER,
          id_participant INTEGER,
          FOREIGN KEY (id_race) REFERENCES Races (id),
          FOREIGN KEY (id_participant) REFERENCES Users (id),
          paid BOOLEAN DEFAULT FALSE
        )
    `)


    // añadir usuario admin automáticamente
    // admin@gmail.com - admin1234
    const email = 'admin@gmail.com'
    const password = 'admin1234'

    const cryptPassword = await bcrypt.hash(password, 10)

    await connection.query(`
      insert into Users (email, password, role, name, surname, gender, year) 
      values ("${email}", "${cryptPassword}", "admin", "Manuela", "Pérez", "f", 1900);`)

  } catch (error) {
    console.error(error);
  } finally {
    console.log("Todo hecho, liberando conexión");
    if (connection) connection.release();
    process.exit();
  }
}

main();
