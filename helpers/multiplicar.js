const fs = require('fs');
const colors = require('colors');

const crearArchivo = (base = 5, listar = false, hasta = 11) => {

    return new Promise((resolve,reject) => {

        if(listar)
            console.log("================".blue)
            console.log(`TABLA DEL ${base}`)
            console.log("================".white)

        let salida = '';
        let consola = '';

        getMultiplicacion = (base, hasta) => {
            let res = 1;
            for (let index = 0; index < hasta+1; index++) {
                
                res = base*index;

                salida += `${base} X ${index} = ${res}\n`;
                consola += `${base} ${'X'.blue} ${index} ${'='.blue} ${res}\n`;

            }
            if(listar)
                console.log(consola);
        }

        getMultiplicacion(base,hasta);

        // fs.writeFile(`tabla-${baseGlobal}.txt`,salida,(err)=>{
        //     if (err) throw err;
        //     console.log(`tabla-${baseGlobal}.txt creado`);
        // })

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        console.log(`tabla-${base}.txt creado`.red);


        (salida)
            ? resolve(`tabla-${base}.txt`)
            : reject(`No se obtuvo salida`)



    }); 


}

module.exports = {
    crearArchivo
}