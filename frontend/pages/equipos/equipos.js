
import { empleados,insertEmp,delet,update,getempleado } from "./api.js";

document.addEventListener("DOMContentLoaded",showEmpleados);
const content=document.querySelector('#Content');

async function showEmpleados (){
    const empleado=await empleados();
    console.log(empleado);
    empleado.forEach(element => {
        const {_id,Apellido,Nombre,Titulo,TituloCortesia,FechaNacimiento,FechaContratacion,Direccion,Ciudad,Regiones,CodigoPostal,Pais,Telefono,Extension,Foto,Notas,Jefe}=element;
        content.innerHTML+=`
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${Foto}">
        <div class="card-body">
            <h5 class="card-title">${Nombre} ${Apellido}</h5>
            <p class="card-text">Title: ${Titulo}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Titulo Cortesia: ${TituloCortesia}</li>
            <li class="list-group-item">Fecha Nacimiento: ${FechaNacimiento}</li>
            <li class="list-group-item">Fecha Contratacion: ${FechaContratacion}</li>
            <li class="list-group-item">Direccion: ${Direccion}</li>
            <li class="list-group-item">Ciudad: ${Ciudad}</li>
            <li class="list-group-item">Regiones: ${Regiones}</li>
            <li class="list-group-item">Pais: ${Pais}</li>
            <li class="list-group-item">CodigoPostal: ${CodigoPostal}</li>
            <li class="list-group-item">Extension: ${Extension}</li>
            <li class="list-group-item">Telefono: ${Telefono}</li>
            <li class="list-group-item">Notas: ${Notas}</li>
            <li class="list-group-item">Jefe: ${Jefe}</li>

        </ul>
        <div class="card-body">
        <button class="btn btn-danger delete" id="${_id}">Delete</button>
        <button type="button" class="btn btn-warning update" id="${_id}" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">Update</button>
        </div>
        </div>
        `
    });
};

//metodo insertar

const formInsert=document.querySelector('#formInsert');

// agg un event para el submit y ejecutar la funcion insertat

formInsert.addEventListener('submit',(e)=>{
    e.preventDefault();
    insert();
});


const insert=()=>{

    const Apellido=document.querySelector('#apellido').value;
    const Nombre=document.querySelector('#Nombre').value;
    const Titulo=document.querySelector('#Titulo').value;
    const TituloCortesia=document.querySelector('#TituloCortesia').value;
    const FechaNacimiento=document.querySelector('#fechaNacimiento').value;
    const FechaContratacion=document.querySelector('#FechaContratasion').value;
    const Direccion=document.querySelector('#direccion').value;
    const Ciudad=document.querySelector('#ciudad').value;
    const Regiones=document.querySelector('#regiones').value;
    const CodigoPostal=document.querySelector('#codigoPostal').value;
    const Pais=document.querySelector('#Pais').value;
    const Telefono=document.querySelector('#telefono').value;
    const Extension=document.querySelector('#extension').value;
    const Foto=document.querySelector('#Foto').value;
    const Notas=document.querySelector('#notas').value;
    const Jefe=document.querySelector('#Jefe').value;
    
    const cliente={
        Apellido,
        Nombre,
        Titulo,
        TituloCortesia,
        FechaNacimiento,
        FechaContratacion,
        Direccion,
        Ciudad,
        Regiones,
        CodigoPostal,
        Pais,
        Telefono,
        Extension,
        Foto,
        Notas,
        Jefe
    }
    if(validation(cliente)){
        alert('todos los campos son obligatorios')
    }else{
        return (insertEmp(cliente));
    }
}

content.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
        const id=e.target.getAttribute('id');
        delet(id);
    }else if(e.target.classList.contains('update')){
        const id=e.target.getAttribute('id');
        getEmp(id);
    }
});

const getEmp= async (id)=>{
    const emp= await getempleado(id);
    const {_id,Apellido,Nombre,Titulo,TituloCortesia,FechaNacimiento,FechaContratacion,Direccion,Ciudad,Regiones,CodigoPostal,Pais,Telefono,Extension,Foto,Notas,Jefe}=emp

    console.log(emp);
    document.querySelector('#updapellido').value=Apellido;
    document.querySelector('#updNombre').value=Nombre;
    document.querySelector('#updTitulo').value=Titulo;
    document.querySelector('#updTituloCortesia').value=TituloCortesia;
    document.querySelector('#updfechaNacimiento').value=FechaNacimiento;
    document.querySelector('#updFechaContratasion').value=FechaContratacion;
    document.querySelector('#upddireccion').value=Direccion;
    document.querySelector('#updciudad').value=Ciudad;
    document.querySelector('#updregiones').value=Regiones;
    document.querySelector('#updcodigoPostal').value=CodigoPostal;
    document.querySelector('#updPais').value=Pais;
    document.querySelector('#updtelefono').value=Telefono;
    document.querySelector('#updextension').value=Extension;
    document.querySelector('#updnotas').value=Notas;
    document.querySelector('#updJefe').value=Jefe;
    document.querySelector('#updFoto').value=Foto;
    document.querySelector('#idUpdate').value=_id;
}
const updateForm=document.querySelector('#updateForm');

updateForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    updateEmp();
})
function updateEmp(){

    const Apellido=document.querySelector('#updapellido').value;
    const Nombre=document.querySelector('#updNombre').value;
    const Titulo=document.querySelector('#updTitulo').value;
    const TituloCortesia=document.querySelector('#updTituloCortesia').value;
    const FechaNacimiento=document.querySelector('#updfechaNacimiento').value;
    const FechaContratacion=document.querySelector('#updFechaContratasion').value;
    const Direccion=document.querySelector('#upddireccion').value;
    const Ciudad=document.querySelector('#updciudad').value;
    const Regiones=document.querySelector('#updregiones').value;
    const CodigoPostal=document.querySelector('#updcodigoPostal').value;
    const Pais=document.querySelector('#updPais').value;
    const Telefono=document.querySelector('#updtelefono').value;
    const Extension=document.querySelector('#updextension').value;
    const Foto=document.querySelector('#updFoto').value;
    const Notas=document.querySelector('#updnotas').value;
    const Jefe=document.querySelector('#updJefe').value;
    const id=document.querySelector('#idUpdate').value;

    const empleado={
        Apellido,
        Nombre,
        Titulo,
        TituloCortesia,
        FechaNacimiento,
        FechaContratacion,
        Direccion,
        Ciudad,
        Regiones,
        CodigoPostal,
        Pais,
        Telefono,
        Extension,
        Foto,
        Notas,
        Jefe
    }
    if(validation(empleado)){
        alert('todos los campos son obligatorios')
    }else{
        return update(empleado,id);
    }
}

function validation(obj) {
    return !Object.values(obj).every(element=>element != '')
}
