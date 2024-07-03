const csv = require('csvtojson')

const csvFilePath = './tdf_winners.csv'

csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        const distances = jsonObj.map(editionData => editionData.distance)

        let total = 0

        for (let distance of distances) {
            total += parseInt(distance)
        }

        console.log('La distancia total es: ', total)
    })
