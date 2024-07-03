const csv = require('csvtojson')

console.log(process.argv)
const csvFilePath = process.argv[2]
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
