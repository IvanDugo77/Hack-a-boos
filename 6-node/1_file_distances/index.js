/**
 * El objetivo de este ejercicio es comparar cómo es 
 * desarrollo con y sin librarías externas. 
 * 
 * Para ello resolveremos el siguiente problema:
 * 
 * "Devolver los kilómetros totales de todas las
 * ediciones del Tour de Francia"
 * 
 * Los datos se encuentran en el fichero tdf_winners.csv
 * 
 */

 const fs = require('fs') // es una dependencia internal, Javascript ya la conoce, no hay que instalarla


 const fileContent = fs.readFileSync('./tdf_winners.csv', 'utf8')
 const lines = fileContent.split('\n')
 
 /**
  * Esta función calcula la distancia total 
  * del Tour de Francia de manera procedimental,
  * con bucles, declaración de variables, etc
  */
 function getTotalDistance(yearlyData) {
     let total = 0;
 
     // notad que empezamos a iterar en la segunda posición
     // (la de índice 1) ya que la primera línea contiene los
     // nombres de las columnas
     for (let i=1; i<yearlyData.length; i++) {
         const fields = yearlyData[i].split(',')
 
         // en la posición 4 está la columna distancia
         const currentDistance = fields[4]
 
         // para algunas filas, la columna distancia está vacía
         if (currentDistance===undefined) {
             continue
         }
     
         total += parseInt(current)
     }
 
     return total
 }
 

/**
 * Esta función calcula lo mismo que la anterior, pero 
 * de manera funcional. Se usan los mecanismos map/filter/reduce
 * 
 */
 function getTotalDistanceFunctional(yearlyData) {
    const distanceExists = line => line[4] !== undefined && line[4] !== ''

    const total = yearlyData
        .slice(1)                      // eliminar la cabecera
        .map(line => line.split(','))  // separa en campos
        .filter( distanceExists )      // me quedo solo con las líneas donde en la posición 4 hay algo
        .map( line => parseInt(line[4])) // convierto el array de cada línea a un número (el parseInt a la posición 4)
        .reduce( (curr, acc) => curr+acc, 0)

    return total
}


//getTotalDistanceFunctional(lines)
console.log(getTotalDistanceFunctional(lines))
