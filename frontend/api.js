const urlGetCic= "http://localhost:4002/ciclista";

//getAll categories

export const ciclistas =async ()=>{
    try {
        const data=await fetch (`${urlGetCic}`);
        const result=data.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}

export const ciclista =async (id)=>{
    try {
        const data=await fetch (`${urlGetCic}/${id}`);
        const result=data.json();
        return result;

    } catch (error) {
        console.log(error);
    }
}

export const insert =async (categoria)=>{
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
        await fetch(`${urlGetCic}/upd/${id}`,{
            method:'PATCH',
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
        await fetch(`${urlGetCic}/${id}`,{
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



