
const fs = require('fs');

const crearArchivo1 = async (base = 5) => {

       try {

            console.log("================")
            console.log(`TABLA DEL ${base}`)
            console.log("================")

            let salida = '';

            getMultiplicacion = (base) => {
                let res = 1;
                for (let index = 0; index < 11; index++) {
                    
                    res = base*index;

                    salida += `${base} X ${index} = ${res}\n`;

                }
                console.log(salida);
            }

            getMultiplicacion(base);

            // fs.writeFile(`tabla-${baseGlobal}.txt`,salida,(err)=>{
            //     if (err) throw err;
            //     console.log(`tabla-${baseGlobal}.txt creado`);
            // })

            fs.writeFileSync(`tabla-${base}.txt`, salida);

            //console.log(`tabla-${base}.txt creado`);

            return `tabla-${base}.txt`

       } catch (error) {
            throw error;
       }
}

module.exports = {
    crearArchivo1
}








