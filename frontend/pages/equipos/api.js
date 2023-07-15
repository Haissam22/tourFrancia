const urlEqui = "http://localhost:4002/equipo";

export const equipos = async () => {
  try {
    const equipo = await fetch(`${urlEqui}`);
    const data = equipo.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
export const insert=async(equipo)=>{
  try {
    await fetch(`${urlEqui}/add`,{
      method:"POST",
      body:JSON.stringify(equipo),
      headers:{
        "Content-Type":"application/json"
      }
    });
    window.location.href="./equipos.html"
  } catch (error) {
    console.log(error);
  }
}

export const  delet=async (id)=>{
  try {
    await fetch(`${urlEqui}/${id}`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
      }
    });
    window.location.href="./equipos.html"
  } catch (error){
    console.log(error);
  }
}
export const update = async (equipo,id)=>{
  try {
   await fetch(`${urlEqui}/upd/${id}`,{
    method:"PATCH",
    body:JSON.stringify(equipo),
    headers:{
      'Content-Type':'application/json'
    } 
   })
   window.location.href="./equipos.html";
  } catch (error) {
    console.log(error)
  }
}

export const getequipo = async (id) => {
  try {
    const equipo = await fetch(`${urlEqui}/${id}`);
    const data = equipo.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
