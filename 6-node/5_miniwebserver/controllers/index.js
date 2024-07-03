const get_docs_by_type = (req, res) => {
    // localhost:8888/docs/tech
    // localhost:8888/docs/user
    const { type } = req.params
    const { length } = req.query

    if (type === 'user') {
        let datos = []

        for (let i=0; i< length; i++) {
            datos.push(`[${i}] documentación usuario`)
        }
        res.json(datos)
    } else if (type === 'tech') {
        let datos = []

        for (let i=0; i< length; i++) {
            datos.push(`[${i}] documentación técnica`)
        }
        res.json(datos)
    } else {
        res.status(404).send('No se encuentra la página solicitada')
    }
}

const get_main_doc = (req, res) => {
    res.json('sección principal de la documentación')
}

const get_api_doc = (req, res) => {
    res.json('documentación de la api')
}

const get_private_doc = (req, res) => {
    res.json('documentación privada')
}

module.exports = {
    get_api_doc,
    get_docs_by_type,
    get_main_doc,
    get_private_doc
}