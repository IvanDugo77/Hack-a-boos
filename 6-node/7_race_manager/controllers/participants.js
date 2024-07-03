const { getConnection } = require("../db");

const listParticipants = async (req, res) => {
    // este endpoint es para obtener la lista de participantes 
    // (entendidos como los usuarios dados de alta en el sistema
    // , no confundir con los participantes de una carrera)

    let connection;

    try {
        connection = await getConnection();
        const participants = await connection.query('select * from Participants;')
        res.send(participants[0])
    } catch(err) {
        console.log('ERROR: ', err)
        res.status(500).send()
    } finally {
        if (connection) {
            connection.release()
        }
    }
}

const createParticipant = async (req, res) => {
    const name = req.body.name
    const year = req.body.year
    const surname = req.body.surname
    const gender = req.body.gender

    if (name === undefined || year === undefined || surname === undefined || gender === undefined) {
        res.status(400).send()
        return
    }

    let connection = await getConnection();

    try {
        await connection.query(`
            insert into Participants (name, year, surname, gender) 
            values ("${name}", ${year}, "${surname}", "${gender}")`)

        res.status(201).send()
    } catch(err) {
        console.log('Error creating participant: ', err)
        res.status(500).send()
        return
    } finally {
        connection.release()
    }
}


module.exports = {
    createParticipant,
    listParticipants
}