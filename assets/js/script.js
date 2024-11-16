//BASE DE DATOS (ORIGINAL)
var radiologia = [
    {hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA'},
    {hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE'},
    {hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE'},
    {hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA'},
    {hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA'},
];

var traumatologia = [
    {hora: '8:00',  especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ',     rut: '15554774-5', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'MARIA SOLAR',          paciente: 'ANGÉLICA NAVAS',    rut: '15444147-9', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'MARIA ARRIAGADA',     paciente: 'ANA KLAPP',         rut: '17879423-9', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'ALEJANDRO BADILLA',   paciente: 'FELIPE MARDONES',   rut: '1547423-6', prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'CECILIA BUDNIK',      paciente: 'DIEGO MARRE',       rut: '16554741-K', prevision: 'FONASA'},
    {hora: '12:00', especialista: 'ARTURO CAVAGNARO',    paciente: 'CECILIA MENDEZ',    rut: '9747535-8', prevision: 'ISAPRE'},
    {hora: '12:30', especialista: 'ANDRES KANACRI',      paciente: 'MARCIAL SUAZO',     rut: '11254785-5', prevision: 'ISAPRE'},
];

var dental = [
    {hora: '8:30',  especialista: 'ANDREA ZUÑIGA',          paciente: 'MARCELA RETAMAL',rut: '11123425-6', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU',      paciente: 'ANGEL MUÑOZ',    rut: '9878789-2',  prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'SCARLETT WITTING',       paciente: 'MARIO KAST',     rut: '7998789-5',  prevision: 'FONASA'},
    {hora: '13:00', especialista: 'FRANCISCO VON TEUBER',   paciente: 'KARIN FERNANDEZ',rut: '18887662-K', prevision: 'FONASA'},
    {hora: '13:30', especialista: 'EDUARDO VIÑUELA',        paciente: 'HUGO SANCHEZ',   rut: '17665461-4', prevision: 'FONASA'},
    {hora: '14:00', especialista: 'RAQUEL VILLASECA',       paciente: 'ANA SEPULVEDA',  rut: '14441281-0', prevision: 'ISAPRE'},
];


//CANTIDAD DE ATENCIONES (vista tabla)
document.querySelector("#cantRadiologia").innerHTML = radiologia.length;
document.querySelector("#cantTraumatologia").innerHTML = traumatologia.length;
document.querySelector("#cantDental").innerHTML = dental.length;

//Código Cantidad de atenciones (original)
// document.write(`<p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>`);
// document.write(`<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`);
// document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);


//PRIMERA Y ULTIMA ATENCIÓN (vista tabla)

//Radiología
document.querySelector("#radioPrimeraPaciente").innerHTML = radiologia[0].paciente;
document.querySelector("#radioPrimeraPrevision").innerHTML = radiologia[0].prevision;
document.querySelector("#radioUltimaPaciente").innerHTML = radiologia[radiologia.length -1].paciente;
document.querySelector("#radioUltimaPrevision").innerHTML = radiologia[radiologia.length -1].prevision;

//Traumatologia
document.querySelector("#traumaPrimeraPaciente").innerHTML = traumatologia[0].paciente;
document.querySelector("#traumaPrimeraPrevision").innerHTML = traumatologia[0].prevision;
document.querySelector("#traumaUltimaPaciente").innerHTML = traumatologia[traumatologia.length -1].paciente;
document.querySelector("#traumaUltimaPrevision").innerHTML = traumatologia[traumatologia.length -1].prevision;

//Dental
document.querySelector("#dentalPrimeraPaciente").innerHTML = dental[0].paciente;
document.querySelector("#dentalPrimeraPrevision").innerHTML = dental[0].prevision;
document.querySelector("#dentalUltimaPaciente").innerHTML = dental[dental.length -1].paciente;
document.querySelector("#dentalUltimaPrevision").innerHTML = dental[dental.length -1].prevision;

//Código primera y ultima atención (original)
// document.write(`<p>Primera atencion: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length -1].paciente} - ${radiologia[radiologia.length -1].prevision}.</p>`);
// document.write(`<p>Primera atencion: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length -1].paciente} - ${traumatologia[traumatologia.length -1].prevision}.</p>`);
// document.write(`<p>Primera atencion: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length -1].paciente} - ${dental[dental.length -1].prevision}.</p>`);



//DESARROLLO DESAFÍO

//1. Agregar las siguientes horas al arreglo de Traumatología:

//Array original con nuevo nombre
// let trauma = [
//     {hora: '8:00',  especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ',     rut: '15554774-5', prevision: 'FONASA'},
//     {hora: '10:00', especialista: 'RAUL ARAYA',          paciente: 'ANGÉLICA NAVAS',    rut: '15444147-9', prevision: 'ISAPRE'},
//     {hora: '10:30', especialista: 'MARIA ARRIAGADA',     paciente: 'ANA KLAPP',         rut: '17879423-9', prevision: 'ISAPRE'},
//     {hora: '11:00', especialista: 'ALEJANDRO BADILLA',   paciente: 'FELIPE MARDONES',   rut: '1547423-6', prevision: 'ISAPRE'},
//     {hora: '11:30', especialista: 'CECILIA BUDNIK',      paciente: 'DIEGO MARRE',       rut: '16554741-K', prevision: 'FONASA'},
//     {hora: '12:00', especialista: 'ARTURO CAVAGNARO',    paciente: 'CECILIA MENDEZ',    rut: '9747535-8', prevision: 'ISAPRE'},
//     {hora: '12:30', especialista: 'ANDRES KANACRI',      paciente: 'MARCIAL SUAZO',     rut: '11254785-5', prevision: 'ISAPRE'},
// ];

//OTRA OPCION A TRABAJAR LUEGO DIRECTO DEL FORM:

//Creando la tabla
// let crearTabla = function(lista){
//     let stringTabla = "<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>R.U.T.</th><th>Previsión</th></tr>";
//     for(let elemento of lista){
//         let fila = "<tr><td>";
//             fila += elemento.hora;
//             fila += "</td>"

//             fila += "<td>";
//             fila += elemento.especialista;
//             fila += "</td>"

//             fila += "<td>";
//             fila += elemento.paciente;
//             fila += "</td>"

//             fila += "<td>";
//             fila += elemento.rut;
//             fila += "</td>"

//             fila += "<td>";
//             fila += elemento.prevision;
//             fila += "</td>"

//             fila += "</tr>";
//             stringTabla += fila;
//             //console.log(stringTabla);
//     }
//     return stringTabla;
// };
// document.getElementById("tableOne").innerHTML = crearTabla(trauma);

// //Agregando datos nuevos (del formulario a la tabla)
// const form = document.getElementById("formOne");

// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     let formOneData = new FormData(form);
//     insertRow(formOneData);
//     formOne.reset();
// });

// function insertRow(formOneData){
//     let tableOneRef = document.getElementById("tableOne");
//     let newRowRef = tableOneRef.insertRow(-1);

//     let newCellRef = newRowRef.insertCell(0);
//     var horas = $('#hora').find(":selected").text();
//     newCellRef.textContent = (horas);

//     newCellRef = newRowRef.insertCell(1);
//     newCellRef.textContent = formOneData.get("especialista");

//     newCellRef = newRowRef.insertCell(2);
//     newCellRef.textContent = formOneData.get("paciente");

//     newCellRef = newRowRef.insertCell(3);
//     newCellRef.textContent = formOneData.get("rut");

//     newCellRef = newRowRef.insertCell(4);
//     var previsiones = $('#prevision').find(":selected").text();
//     newCellRef.textContent = (previsiones);
// }

// Agregando datos nuevos (del form al array) (Me dan valores null, verificar cuál es el problema)
// $(document).ready(function(){
//     $('#formOne').submit(function(){
//         $('#formOne input[type="text"]').each(function(){
//             if(isNaN(parseInt($(this).val()))) {
//                 return false;
//             }
//         });

//         let added_data = Array();   
//         added_data.push(parseInt($('#hora').val()));
//         added_data.push(parseInt($('#especialista').val()));
//         added_data.push(parseInt($('#paciente').val()));
//         added_data.push(parseInt($('#rut').val()));
//         added_data.push(parseInt($('#prevision').val()));

//         $('#formOne input[type="text"]').val('');
//         trauma.push(added_data);
//         alert(JSON.stringify(trauma));
//         return false;
//     });
// });
// console.log(trauma);



//DESARROLLO DEL DESAFÍO
document.write("DESARROLLO DESAFÍO - Uso de métodos con arrays y objetos" .bold());
document.write('<br><br><br>');

//1. Agregar las siguientes horas al arreglo de Traumatología:
document.write("1.AGREGAR HORAS AL ARREGLO TRAUMATOLOGÍA" .bold());
document.write('<br>');
document.write("Verificar en Consola");
document.write('<br><br><br>');

traumatologia.push(
    {hora: '9:00',  especialista: 'RENE POBLETE', paciente: 'ANA GELLONA',     rut: '13123329-7', prevision: 'ISAPRE'},
    {hora: '9:30', especialista: 'MARIA SOLAR',          paciente: 'RAMIRO ANDRADE',    rut: '12221451-K', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL LOYOLA',     paciente: 'CARMEN ISLA',         rut: '10112348-3', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'ANTONIO LARENAS',   paciente: 'PABLO LOAYZA',   rut: '13453234-1', prevision: 'ISAPRE'},
    {hora: '12:00', especialista: 'MATIAS ARAVENA',      paciente: 'SUSANA POBLETE',       rut: '14345656-6', prevision: 'FONASA'},
);
console.log(traumatologia);

//2. Eliminar el primer y último elemento del arreglo de Radiología
document.write("2.ELIMINAR PRIMER Y ÚLTIMO ARREFGLO DE RADIOLOGÍA" .bold());
document.write('<br>');
document.write("Verificar en Consola");
document.write('<br><br><br>');

let ultimo = radiologia.pop();
let primer = radiologia.shift();
console.log(radiologia);


//3. Imprimir en la página HTML, mediante document.write y/o las funciones que estime conveniente, la lista de consultas médicas de Dental. Sin embargo, debe hacerlo separando por un guión cada dato desplegado y cada fila de información debe estar separada por un párrafo
var dentalData = dental.reduce(function(a, data){
    return a + data.hora  + ' - ' + data.especialista + ' - ' + data.paciente + ' - ' + data.rut + ' - ' + data.prevision + '<br>'; 
    }, ' ');
document.write("3.CONSULTAS MÉDICAS DENTAL" .bold());
document.write('<br>');
document.write(dentalData);
document.write('<br><br>');


//4. Imprimir un listado total de todos los pacientes que se atendieron en el centro médico. Para esto, deberá unir todos los nombres de pacientes e imprimir uno por cada párrafo
var radiologiaData = radiologia.reduce(function(a, data){
    return a + data.paciente + '<br>'; 
    }, ' ');
var traumatologiaData = traumatologia.reduce(function(a, data){
    return a + data.paciente + '<br>'; 
    }, ' ');
var dentalData = dental.reduce(function(a, data){
    return a + data.paciente + '<br>'; 
    }, ' ');

document.write("4.PACIENTES DEL CENTRO MÉDICO" .bold());
document.write('<br>');

document.write("Radiología" .bold());
document.write('<br>');
document.write(radiologiaData);
document.write('<br>');

document.write("Traumatología" .bold());
document.write('<br>');
document.write(traumatologiaData);
document.write('<br>');

document.write("Dental" .bold());
document.write('<br>');
document.write(dentalData);
document.write('<br>');

var pacientesData = radiologia.concat(traumatologia).concat(dental);
var dataConcant = pacientesData.reduce(function(a, data){
    return a + data.paciente + '<br>'; 
    }, ' ');

    document.write("Todos los pacientes" .bold());
    document.write('<br>');
    document.write(dataConcant);
    document.write('<br><br>');


//5. Filtrar aquellos pacientes que indican ser de ISAPRE en la lista de consultas médicas de Dental
document.write("5.PACIENTES DE DENTAL CON ISAPRE" .bold());
document.write('<br>');

var dentalIsapre = dental.filter(function(cliente){
    return cliente.prevision === "ISAPRE"
});

var pacienteDentalIsapre = dentalIsapre.reduce(function(a, data){
    return a + data.paciente + '<br>'; 
    }, ' ');

document.write(pacienteDentalIsapre);
document.write('<br><br>');


//6. Filtrar aquellos pacientes que indican ser de FONASA en la lista de consultas médicas de Traumatología
document.write("6.PACIENTES DE TRAUMATOLOGÍA CON FONASA" .bold());
document.write('<br>');

var TraumatologiaFonasa = traumatologia.filter(function(cliente){
    return cliente.prevision === "FONASA"
});

var pacienteTraumatologiaFonasa = TraumatologiaFonasa.reduce(function(a, data){
    return a + data.paciente + '<br>'; 
    }, ' ');

document.write(pacienteTraumatologiaFonasa);
document.write('<br><br>');

