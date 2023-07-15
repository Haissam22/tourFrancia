const urlPrem = "http://localhost:4002/premio";

export const premios = async () => {
  try {
    const premio = await fetch(`${urlPrem}`);
    const data = premio.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
export const insertPrem=async(premio)=>{
  try {
    await fetch(`${urlPrem}/add`,{
      method:"POST",
      body:JSON.stringify(premio),
      headers:{
        "Content-Type":"application/json"
      }
    });
    window.location.href="./premios.html"
  } catch (error) {
    console.log(error);
  }
}

export const  delet=async (id)=>{
  try {
    await fetch(`${urlPrem}/${id}`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
      }
    });
    
  } catch (error){
    console.log(error);
  }
}
export const update = async (premio,id)=>{
  try {
   await fetch(`${urlPrem}/upd/${id}`,{
    method:"PATCH",
    body:JSON.stringify(premio),
    headers:{
      'Content-Type':'application/json'
    } 
   })
    window.location.href="./premios.html";
  } catch (error) {
    console.log(error)
  }
}

export const getpremio = async (id) => {
  try {
    const premio = await fetch(`${urlPrem}/${id}`);
    const data = premio.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}


