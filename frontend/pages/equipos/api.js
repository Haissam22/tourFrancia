const urlGetCli = "http://localhost:5001/empleado";

export const empleados = async () => {
  try {
    const empleado = await fetch(`${urlGetCli}/all`);
    const data = empleado.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
export const insertEmp=async(empleado)=>{
  try {
    await fetch(`${urlGetCli}/add`,{
      method:"POST",
      body:JSON.stringify(empleado),
      headers:{
        "Content-Type":"application/json"
      }
    });
    /* window.location.href="./empleados.html" */
  } catch (error) {
    console.log(error);
  }
}

export const  delet=async (id)=>{
  try {
    await fetch(`${urlGetCli}/${id}`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
      }
    });
    
  } catch (error){
    console.log(error);
  }
}
export const update = async (empleado,id)=>{
  try {
   await fetch(`${urlGetCli}/upd/${id}`,{
    method:"PATCH",
    body:JSON.stringify(empleado),
    headers:{
      'Content-Type':'application/json'
    } 
   })
   window.location.href="./empleados.html";
  } catch (error) {
    console.log(error)
  }
}

export const getempleado = async (id) => {
  try {
    const empleado = await fetch(`${urlGetCli}/${id}`);
    const data = empleado.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
