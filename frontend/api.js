const urlGetCat= "http://localhost:5001/categoria";

//getAll categories

export const categorias =async ()=>{
    try {
        const data=await fetch (`${urlGetCat}/all`);
        const result=data.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}

export const categoria =async (id)=>{
    try {
        const data=await fetch (`${urlGetCat}/${id}`);
        const result=data.json();
        return result;

    } catch (error) {
        console.log(error);
    }
}

export const insertCategorias =async (categoria)=>{
    try {
        await fetch(urlGetCat,{
            method:'POST',
            body:JSON.stringify(categoria),
            headers:{
                'Content-Type':'application/json'
            }
        })
        window.location.href = "index.html";
    } catch (error) {
        console.log(error); 
    }
}

export const update=async (categoriaUp,id)=>{
    try {
        await fetch(`${urlGetCat}/${id}`,{
            method:'PUT',
            body:JSON.stringify(categoriaUp),
            headers:{
                'Content-Type':'application/json'
            }
        })
        window.location.href = "index.html";
    } catch (error) {
        console.log(error)
    }
}

export const delet=async (id)=>{
    try {
        await fetch(`${urlGetCat}/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })
        window.location.href = "index.html";
    } catch (error) {
        console.log(error)
    }
}



