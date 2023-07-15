
import { ciclista,ciclistas,insert,update,delet } from "./api.js";


document.addEventListener("DOMContentLoaded",showCiclistas);
const tableCat=document.querySelector('#categorias');


async function showCiclistas() {
    const data=await ciclistas();
    console.log(data);
    data.forEach(element => {
        const {nombre,edad,sexo,equipo,etapa,_id} = element;
        tableCat.innerHTML+=`
            <tr>
            <td>${_id}</td>
            <td>${nombre}</td>
            <td>${edad}</td>
            <td>${sexo}</td>
            <td>${equipo}</td>
            <td>${etapa}</td>
            <td> <button class="btn btn-danger delete" id="${_id}">Delete</button></td>
            <td> <button type="button" class="btn btn-warning update" id="${_id}" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">Update</button></td>
            </tr>
        `
    });
}

//eventos para definir si se borra o se actualiza la categoria

tableCat.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
        const id=e.target.getAttribute('id');
        borrar(id);
    }else if(e.target.classList.contains('update')){
        const id=e.target.getAttribute('id');
        getCiclista(id);
    }
})

//metodo borrar o DELETE
const borrar=(id)=>{
    const confir=confirm("desea eliminarlo");
    if(confir){
        console.log("uno"); 
        delet(id);
    }
}

//metodo insertar o INSERT

const formInsert=document.querySelector('#insertForm');

formInsert.addEventListener('submit',(e)=>{
    insertCiclist(e);
})

const insertCiclist=(e)=>{
    e.preventDefault();
    const nombre=document.querySelector('#name').value;
    const edad=document.querySelector('#description').value;
    const sexo=document.querySelector('#sexo').value;
    const equipo=document.querySelector('#equipo').value;
    const etapa=document.querySelector('#etapa').value;
    const ciclista={
        nombre,
        edad,
        sexo,
        equipo,
        etapa
    }
    console.log(ciclista);
    if(validation(ciclista)){
        alert("todos los datos son obligatorios")
    }else{
        return insert(ciclista);
    }
}



//metodo actualizar o UPDATE
const getCiclista= async(id)=>{
    console.log(id)
    const data=await ciclista(id);
    const {nombre,edad,sexo,equipo,etapa,_id}=data;
    console.log(data);
   
    document.querySelector('#idUpdate').value= _id;
    document.querySelector('#updname').value= nombre;
    document.querySelector('#updedad').value= edad;
    document.querySelector('#updsexo').value= sexo;
    document.querySelector('#updequipo').value= equipo;
    document.querySelector('#updetapa').value= etapa;

}
const updateForm=document.querySelector('#updateForm');

updateForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    updateCiclis();
})

function updateCiclis(){
      
    const id=document.querySelector('#idUpdate').value
    const nombre=document.querySelector('#updname').value
    const edad=document.querySelector('#updedad').value
    const sexo=document.querySelector('#updsexo').value
    const equipo=document.querySelector('#updequipo').value
    const etapa=document.querySelector('#updetapa').value

    /* const Imagen=document.querySelector('#imageUpdate').files[0].name;*/

    const ciclista={
        nombre,
        edad,
        sexo,
        equipo,
        etapa
    } 
    console.log(ciclista,id);
   if(validation(ciclista)){
        alert("todos los datos son obligatorios")
    }else{
        return update(ciclista,id);
    }  
}


function validation(obj) {
    return !Object.values(obj).every(element=>element !== '')
}
