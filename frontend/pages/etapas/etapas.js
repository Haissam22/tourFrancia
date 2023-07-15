import {insertetapas,etapa,etapas,update,delet} from "./api.js";

document.addEventListener("DOMContentLoaded",showEtapas);
const content=document.querySelector('#etapas');

async function showEtapas (){
    const data=await etapas();
    console.log(data);
    data.forEach(element => {
        const {_id,numero,participantes,ciudad,km}=element;
        content.innerHTML+=`
        <tr>
            <td>${_id}</td>
            <td>${numero}</td>
            <td>${participantes}</td>
            <td>${ciudad}</td>
            <td>${km}</td>
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

    const numero=document.querySelector('#numero').value;
    const participantes=document.querySelector('#participantes').value;
    const ciudad=document.querySelector('#ciudad').value;
    const km=document.querySelector('#km').value;
   
    
    
    const etapa={
        numero,
        participantes,
        ciudad,
        km,
        
    }
    if(validation(etapa)){
        alert('todos los campos son obligatorios')
    }else{
        return (insertetapas(etapa));
    }
}

content.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
        const id=e.target.getAttribute('id');
        delet(id);
    }else if(e.target.classList.contains('update')){
        const id=e.target.getAttribute('id');
        getEta(id);
    }
});

const getEta= async (id)=>{
    const emp= await etapa(id);
    const {_id,numero,participantes,ciudad,km}=emp

    console.log(emp);
    document.querySelector('#updnumero').value=numero;
    document.querySelector('#updparticipantes').value=participantes;
    document.querySelector('#updciudad').value=ciudad;
    document.querySelector('#updkm').value=km;
    document.querySelector('#idUpdate').value=_id;
}
const updateForm=document.querySelector('#updateForm');

updateForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    updateEq();
})
function updateEq(){

    const numero=document.querySelector('#updnumero').value;
    const participantes=document.querySelector('#updparticipantes').value;
    const ciudad=document.querySelector('#updciudad').value;
    const km=document.querySelector('#updkm').value;

    const etapa={
        numero,
        participantes,
        ciudad,
        km
    }
    if(validation(etapa)){
        alert('todos los campos son obligatorios')
    }else{
        return update(etapa,id);
    }
}

function validation(obj) {
    return !Object.values(obj).every(element=>element != '')
}
