const { options } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar');
const {crearArchivo1} = require('./helpers/multiplicar-async');

const {argv} = require('./config/yargs')
const colors = require('colors');

console.clear()



console.log(argv);

console.log('base: yargs',argv.base)


//option,listar,boolean,default false

let base = argv.base;
let listar = argv.listar;
let hasta = argv.hasta;

console.log(base,listar,hasta)

crearArchivo(base,listar, hasta)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'ha sido creado'))
    .catch( err => console.log(err));


//console.log(process.argv);