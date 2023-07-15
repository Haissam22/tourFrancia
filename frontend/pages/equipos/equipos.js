
import {insert,update,getequipo,equipos,delet} from "./api.js";

document.addEventListener("DOMContentLoaded",showEquipos);
const content=document.querySelector('#equipos');

async function showEquipos (){
    const equipo=await equipos();
    console.log(equipo);
    equipo.forEach(element => {
        const {_id,nombre,manager,integrantes,pais,telefono}=element;
        content.innerHTML+=`
        <tr>
            <td>${_id}</td>
            <td>${nombre}</td>
            <td>${manager}</td>
            <td>${integrantes}</td>
            <td>${pais}</td>
            <td>${telefono}</td>
            <td> <button class="btn btn-danger delete" id="${_id}">Delete</button></td>
            <td> <button type="button" class="btn btn-warning update" id="${_id}" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">Update</button></td>
        </tr>
        `
    });
};

//metodo insertar

const formInsert=document.querySelector('#formInsert');

// agg un event para el submit y ejecutar la funcion insertat

formInsert.addEventListener('submit',(e)=>{
    e.preventDefault();
    insertE();
});


const insertE=()=>{

    const nombre=document.querySelector('#nombre').value;
    const manager=document.querySelector('#manager').value;
    const integrantes=document.querySelector('#integrantes').value;
    const pais=document.querySelector('#pais').value;
    const telefono=document.querySelector('#telefono').value;
    
    
    const equipo={
        nombre,
        manager,
        integrantes,
        pais,
        telefono
    }
    if(validation(equipo)){
        alert('todos los campos son obligatorios')
    }else{
        return (insert(equipo));
    }
}

content.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
        const id=e.target.getAttribute('id');
        delet(id);
    }else if(e.target.classList.contains('update')){
        const id=e.target.getAttribute('id');
        getequi(id);
    }
});

const getequi= async (id)=>{
    const emp= await getequipo(id);
    const {_id,nombre,manager,integrantes,pais,telefono}=emp

    console.log(emp);
    document.querySelector('#updnombre').value=nombre;
    document.querySelector('#updmanager').value=manager;
    document.querySelector('#updintegrantes').value=integrantes;
    document.querySelector('#updpais').value=pais;
    document.querySelector('#updtelefono').value=telefono;
    document.querySelector('#idUpdate').value=_id;
}
const updateForm=document.querySelector('#updateForm');

updateForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    updateEq();
})
function updateEq(){

    const nombre=document.querySelector('#updnombre').value;
    const manager=document.querySelector('#updmanager').value;
    const integrantes=document.querySelector('#updintegrantes').value;
    const pais=document.querySelector('#updpais').value;
    const telefono=document.querySelector('#updtelefono').value;
    const id=document.querySelector('#idUpdate').value;

    const equipo={
        nombre,
        manager,
        integrantes,
        pais,
        telefono
    }
    if(validation(equipo)){
        alert('todos los campos son obligatorios')
    }else{
        return update(equipo,id);
    }
}

function validation(obj) {
    return !Object.values(obj).every(element=>element != '')
}
