const urletapa= "http://localhost:4002/etapa";

//getAll categories

export const etapas =async ()=>{
    try {
        const data=await fetch (urletapa);
        const result=data.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}

export const etapa =async (id)=>{
    try {
        const data=await fetch (`${urletapa}/${id}`);
        const result=data.json();
        return result;

    } catch (error) {
        console.log(error);
    }
}

export const insertetapas =async (etapa)=>{
    try {
        await fetch(`${urletapa}/add`,{
            method:'POST',
            body:JSON.stringify(etapa),
            headers:{
                'Content-Type':'application/json'
            }
        })
        window.location.href = "./etapas.html";
    } catch (error) {
        console.log(error); 
    }
}

export const update=async (etapaUp,id)=>{
    try {
        await fetch(`${urletapa}/${id}`,{
            method:'PUT',
            body:JSON.stringify(etapaUp),
            headers:{
                'Content-Type':'application/json'
            }
        })
        window.location.href = "./etapas.html";
    } catch (error) {
        console.log(error)
    }
}

export const delet=async (id)=>{
    try {
        await fetch(`${urletapa}/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })
        window.location.href = "./etapas.html";
    } catch (error) {
        console.log(error)
    }
}
