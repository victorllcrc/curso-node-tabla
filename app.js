const {crearArchivo} = require('./helper/multiplicar')
const argv = require('./Config/yargs')
const colors = require('colors')

console.clear()
// console.log(process.argv)
// console.log(argv)
//console.log('Base de yargs:', argv.b)

// const [,,arg3='j=5'] = process.argv
// const[,j] = arg3.split('=')
// console.log(j)

// const j = 6
crearArchivo(argv.b, argv.l, argv.h)
.then(nombreArchivo => console.log(nombreArchivo.rainbow, ' Creado'))
.catch(err => console.log(err))