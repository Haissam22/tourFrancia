import { categorias,categoria,insertCategorias,update,delet } from "./api.js";


document.addEventListener("DOMContentLoaded",showCategorias);
const tableCat=document.querySelector('#categorias');


async function showCategorias() {
    const data=await categorias();
    console.log(data);
    data.forEach(element => {
        const {CategoriaID,CategoriaNombre,Descripcion,Imagen} = element;
        tableCat.innerHTML+=`
            <tr>
            <td>${CategoriaID}</td>
            <td>${CategoriaNombre}</td>
            <td>${Descripcion}</td>
            <td>${Imagen}</td>
            <td> <button class="btn btn-danger delete" id="${CategoriaID}">Delete</button></td>
            <td> <button type="button" class="btn btn-warning update" id="${CategoriaID}" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">Update</button></td>
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
        getCategoria(id);
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
    insert(e);
})

const insert=(e)=>{
    e.preventDefault();
    const CategoriaNombre=document.querySelector('#name').value;
    const Descripcion=document.querySelector('#description').value;
    const Imagen=document.querySelector('#image').value;
    const categoria={
        CategoriaNombre,
        Descripcion,
        Imagen
    }
    console.log(categoria);
    if(validation(categoria)){
        alert("todos los datos son obligatorios")
    }else{
        return insertCategorias(categoria);
    }
}



//metodo actualizar o UPDATE
const getCategoria= async(id)=>{
    const data=await categoria(id);
    const {CategoriaID,CategoriaNombre,Descripcion,Imagen}=data[0];
    console.log(data);
    console.log(CategoriaID)
    document.querySelector('#idUpdate').value= CategoriaID;
    document.querySelector('#nameUpdate').value= CategoriaNombre;
    document.querySelector('#descriptionUpdate').value= Descripcion;
    document.querySelector('#imageUpdate').value= Imagen;
    
}
const updateForm=document.querySelector('#updateForm');

updateForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    updateCa();
})

function updateCa(){
    const id=document.querySelector('#idUpdate').value;
    const CategoriaNombre=document.querySelector('#nameUpdate').value;
    const Descripcion=document.querySelector('#descriptionUpdate').value;
    const Imagen=document.querySelector('#imageUpdate').value;

    /* const Imagen=document.querySelector('#imageUpdate').files[0].name;*/

    const categoria={
        CategoriaNombre,
        Descripcion,
        Imagen
    } 
    console.log(categoria,id);
   if(validation(categoria)){
        alert("todos los datos son obligatorios")
    }else{
        return update(categoria,id);
    }  
}


function validation(obj) {
    return !Object.values(obj).every(element=>element !== '')
}
