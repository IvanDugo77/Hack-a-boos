const { getConnection } = require("../db");

const listRaces = async (req, res) => {
    // este endpoint es para devolver una lista 
    // con las carreras disponibles

    // esta lista de carreras tendremos que obtenerla de una bbdd
    let connection;

    try {
        connection = await getConnection();

        const races = await connection.query('select * from Races;')
        res.send(races[0])
    } catch (err) {
        console.log('ERROR: ', err)
        res.status(500).send()
    } finally {
        if (connection) {
            connection.release()
        }
    }
}

const createRace = async (req, res) => {
    // Este endpoint es para crear carreras
    // nos deben pasar información para poder crear una carrera
    // y guardarla en bbdd. La función donde 
    // se ejecuta el código necesario se llama "controlador"

    // Una carrera puede estar definida por:
    //    - un nombre
    //    - un tipo (ciclismo, atletismo)
    //    - categoria

    // req.body es un JSON donde vienen las variables
    // que necesitamos para crear la carrera
    const category = req.body.category
    const type = req.body.type
    const name = req.body.name
    const date = req.body.date

    console.log('POST /races')

    if (category === undefined || type === undefined || name === undefined || date === undefined) {
        res.status(400).send()
        return
    }

    // una vez que tenemos las tres variables que nos hacen falta,
    // las metemos en bbdd
    // TODO: query para crear una carrera (insert into...)
    let connection = await getConnection();

    try {
        await connection.query(`
            insert into Races (nombre, categoria, date, tipo) 
            values ("${name}", "${category}", "${date}", "${type}");
        `);

        res.status(201).send()
    } catch (err) {
        console.log('ERROR POST /RACES: ', err)
        res.status(500).send()
    } finally {
        connection.release()
    }
}


const addParticipantToRace = async (req, res) => {
    // este endpoint es para dar de alta un participante en una carrera
    // ej.: /races/123/participant
    // Obtengo información de la carrera a la que este participante se está apuntando
    const raceId = req.params.raceId

    // obtengo información del participante
    const id = req.body.id

    // comprobamos que los parámetros del body son válidos
    if (id === undefined) {
        res.status(400).send('Missing participant id')
        return
    } 

    let connection = await getConnection();

    // conectarme a la bbdd y comprobar que la carrera raceId existe
    //    - si la carrera no existe, esta query no devolverá nada (array vacío)
    //    - si sí exista, devolverá un array con alguna entrada
    try {
        const races = await connection.query(`select * from Races where id=${raceId}`)

        // races[0] guarda los resultados
        if (races[0].length === 0) {
            res.status(404).send()
            return
        }

        const participant = await connection.query(`select * from Users where id=${id}`)
        if (participant[0].length === 0) {
            res.status(404).send()
            return
        }

        // Código para insertar en la bbdd
        // TODO: query para inscribir a un participante (crear una entrada en la tabla RaceParticipant)
        await connection.query(`insert into RaceParticipant (id_race, id_participant) values (${raceId}, ${id})`)

        res.status(201).send()
    } catch(err) {
        console.log('Error adding participant to race: ', err)
        res.status(500).send()
    } finally {
        connection.release()
    }
}

const listParticipantsFromRace = async (req, res) => {
    const raceId = req.params.raceId
    let connection = await getConnection();

    try {
        const participants = await connection.query(`
            select Participants.gender, Participants.name, Participants.surname, RaceParticipant.paid
            from RaceParticipant inner join Participants   
            where id_race=${raceId};
        `)
        res.send(participants[0])
    } catch(err) {
        console.log('ERROR: ', err)
        res.status(500).send()
    } finally {
        connection.release()
    }

}

module.exports = {
    addParticipantToRace,
    createRace,
    listParticipantsFromRace,
    listRaces,
}