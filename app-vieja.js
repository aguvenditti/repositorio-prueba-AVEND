
let fs = require('fs');
let process = require('process');

let comando = process.argv[2];

let listaDeTareas = fs.readFileSync('./tareas-vieja.json', 'utf8');
let tareasFinales = JSON.parse(listaDeTareas);

switch (comando) {
    case 'listar':
        for (let i = 0; i < tareasFinales.length; i++) {
            console.log("- " + tareasFinales[i].titulo + " /Estado: " + tareasFinales[i].estado);
        };
        break;
    case 'crear':
        let tituloDeLaTarea = process.argv[3];
        let estadoDeLaTarea = process.argv[4];
        let tarea = {
            titulo: tituloDeLaTarea,
            estado: (estadoDeLaTarea == undefined) ? "pendiente" : estadoDeLaTarea
        };
        tareasFinales.push(tarea);
        let nuevoListadoDeTareas = JSON.stringify(tareasFinales);
        fs.writeFileSync('./tareas-vieja.json', nuevoListadoDeTareas, 'utf8');
        console.log("Tu tarea fue creada con exito");
        break;
    case undefined:
        console.log("Ingrese un comando valido, por ej:");
        console.log("- listar");
        break;
    default:
        console.log('Este comando no esta disponible :(');
}



