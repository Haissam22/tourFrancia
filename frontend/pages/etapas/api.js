const urlGetCat= "http://localhost:5001/producto";

//getAll categories

export const productos =async ()=>{
    try {
        const data=await fetch (`${urlGetCat}/all`);
        const result=data.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}

export const producto =async (id)=>{
    try {
        const data=await fetch (`${urlGetCat}/${id}`);
        const result=data.json();
        return result;

    } catch (error) {
        console.log(error);
    }
}

export const insertproductos =async (producto)=>{
    try {
        await fetch(urlGetCat,{
            method:'POST',
            body:JSON.stringify(producto),
            headers:{
                'Content-Type':'application/json'
            }
        })
        window.location.href = "index.html";
    } catch (error) {
        console.log(error); 
    }
}

export const update=async (productoUp,id)=>{
    try {
        await fetch(`${urlGetCat}/${id}`,{
            method:'PUT',
            body:JSON.stringify(productoUp),
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
