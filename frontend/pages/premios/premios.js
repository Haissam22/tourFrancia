import { clientes,inserClient,delet,getCliente,update } from "./api.js";

document.addEventListener("DOMContentLoaded", showClientes);
const table = document.querySelector('#Cards');

async function showClientes (){
  const cliente = await clientes();
  console.log(cliente);
  cliente.forEach(cliente => {
    const {_id , Compania , Contacto , Titulo , Direccion , Ciudad , Regiones , CodigoPostal , Pais , Telefono , Fax} = cliente;
    table.innerHTML += 
    `
      <div class="card" style="width: 18rem;">
      
      <div class="card-body">
        <h5 class="card-title">${Compania}</h5>
        <p class="card-text">${Titulo}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Contacto: ${Contacto}</li>
        <li class="list-group-item">Direccion: ${Direccion}</li>
        <li class="list-group-item">Ciudad: ${Ciudad}</li>
        <li class="list-group-item">Regiones: ${Regiones}</li>
        <li class="list-group-item">Pais: ${Pais}</li>
        <li class="list-group-item">CodigoPostal: ${CodigoPostal}</li>
        <li class="list-group-item">Fax: ${Fax}</li>
        <li class="list-group-item">Telefono: ${Telefono}</li>
      </ul>
      <div class="card-body">
      <button class="btn btn-danger delete" id="${_id}">Delete</button>
      <button type="button" class="btn btn-warning update" id="${_id}" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">Update</button>
      </div>
    </div>
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
  
  
  const Compania=document.querySelector('#company').value;
  const Contacto=document.querySelector('#contact').value;
  const Titulo=document.querySelector('#title').value;
  const Direccion=document.querySelector('#direction').value;
  const Ciudad=document.querySelector('#city').value;
  const Regiones=document.querySelector('#region').value;
  const CodigoPostal=document.querySelector('#potCode').value;
  const Pais=document.querySelector('#country').value;
  const Telefono=document.querySelector('#cellphone').value;
  const Fax=document.querySelector('#fax').value;

  const cliente={
    Compania,
    Contacto,
    Titulo,
    Direccion,
    Ciudad,
    Regiones,
    CodigoPostal,
    Pais,
    Telefono,
    Fax
  }
  if(validation(cliente)){
    alert("todos los datos son obligatorios")
  }else{
      return inserClient(cliente);
  } 
}

// delete 

table.addEventListener('click',(e)=>{
  if(e.target.classList.contains('delete')){
    const id=e.target.getAttribute('id');
    delet(id);
}else if(e.target.classList.contains('update')){
    const id=e.target.getAttribute('id');
    getClient(id);
}
})


//update

const getClient=async (id)=>{
  const data=await getCliente(id);
  const {_id,Compania,Contacto,Titulo,Direccion,Ciudad,Regiones,CodigoPostal,Pais,Telefono,Fax}=data
  console.log(data);
  document.querySelector('#companyUpdat').value=Compania;
  

  document.querySelector('#contactUpdat').value=Contacto;
  

  document.querySelector('#titleUpdat').value=Titulo;
  
  document.querySelector('#directionUpdat').value=Direccion;
  

  document.querySelector('#cityUpdat').value=Ciudad;
  

  document.querySelector('#regionUpdat').value=Regiones;
 

  document.querySelector('#potCodeUpdat').value=CodigoPostal;
  

  document.querySelector('#countryUpdat').value=Pais;
  

  document.querySelector('#cellphoneUpdat').value=Telefono;
  

  document.querySelector('#faxUpdat').value=Fax;

  document.querySelector('#idUpdate').value=_id;
}

const updateForm=document.querySelector('#updateForm');
updateForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  updateClie();
})


function updateClie() {
  const id=document.querySelector('#idUpdate').value;
  const Compania=document.querySelector('#companyUpdat').value;
  const Contacto=document.querySelector('#contactUpdat').value;
  const Titulo=document.querySelector('#titleUpdat').value;
  const Direccion=document.querySelector('#directionUpdat').value;
  const Ciudad=document.querySelector('#cityUpdat').value;
  const Regiones=document.querySelector('#regionUpdat').value;
  const CodigoPostal=document.querySelector('#potCodeUpdat').value;
  const Pais=document.querySelector('#countryUpdat').value;
  const Telefono=document.querySelector('#cellphoneUpdat').value;
  const Fax=document.querySelector('#faxUpdat').value;
 
  const cliente={
    Compania,
    Contacto,
    Titulo,
    Direccion,
    Ciudad,
    Regiones,
    CodigoPostal,
    Pais,
    Telefono,
    Fax
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



