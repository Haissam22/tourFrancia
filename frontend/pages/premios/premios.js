import {premios,insertPrem,delet,update,getpremio } from "./api.js";

document.addEventListener("DOMContentLoaded", showPremio);
const table = document.querySelector('#premios');

async function showPremio (){
  const premio = await premios();
  console.log(premio);
  premio.forEach(element => {
    const {_id ,etapa,descripcion,km} = element;
    table.innerHTML += 
    `
    <tr>
      <td>${_id}</td>
      <td>${etapa}</td>
      <td>${descripcion}</td>
      <td>${km}</td>
      <td> <button class="btn btn-danger delete" id="${_id}">Delete</button></td>
      <td> <button type="button" class="btn btn-warning update" id="${_id}" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">Update</button></td>
    </tr>
    `
  }) 
}

//metodo insertar


const formInsert=document.querySelector('#formInsert');
// agg un addeventListener para el evento submit y ejecutar la funcion de insertar
formInsert.addEventListener('submit',(e)=>{
  e.preventDefault();
  insert();
})

//
const insert=()=>{
  
  
  const etapa=document.querySelector('#etapa').value;
  const descripcion=document.querySelector('#descripcion').value;
  const km=document.querySelector('#km').value;
  

  const premio={
    etapa,
    descripcion,
    km,

  }
  if(validation(premio)){
    alert("todos los datos son obligatorios")
  }else{
      return insertPrem(premio);
  } 
}

// delete 

table.addEventListener('click',(e)=>{
  if(e.target.classList.contains('delete')){
    const id=e.target.getAttribute('id');
    delet(id);
}else if(e.target.classList.contains('update')){
    const id=e.target.getAttribute('id');
    getPrem(id);
}
})


//update

const getPrem=async (id)=>{
  const data=await getpremio(id);
  const {_id,etapa,descripcion,km}=data

  console.log(data);

  document.querySelector('#updetapa').value=etapa;
  
  document.querySelector('#upddescripcion').value=descripcion;
  
  document.querySelector('#updkm').value=km;

  document.querySelector('#idUpdate').value=_id;
 
}

const updateForm=document.querySelector('#updateForm');
updateForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  updateClie();
})


function updateClie() {
  const id=document.querySelector('#idUpdate').value;
  const etapa=document.querySelector('#updetapa').value;
  const descripcion=document.querySelector('#upddescripcion').value;
  const km=document.querySelector('#updkm').value;

  const cliente={
    etapa,
    descripcion,
    km
  }

  if(validation(cliente)){
    alert("todos los datos son obligatorios")
  }else{
      return update(cliente,id);
  } 
}

function validation(obj) {
  return !Object.values(obj).every(element=>element != '')
}



