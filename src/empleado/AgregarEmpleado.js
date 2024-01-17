import axios from "axios";
import { useState } from "react"



export const AgregarEmpleado = () => {

    const urlBase = "http://localhost:8080/rh-app/empleados";

    const [empleado, setEmpleado] = useState({
        nombre:"",
        departamento:"",
        sueldo:"",
    }) 

    const {nombre, departamento, sueldo} = empleado;

    const onInputChange=(e)=>{
        setEmpleado({...empleado, [e.target.name]:e.target.value})

    }

    const agregarEmpleado = async (e) => {
        e.preventDefault();
        await axios.post(urlBase,empleado);
        setEmpleado({
            nombre:"",
            departamento:"",
            sueldo:"",
        })
        
    }

    return (
        <div className="container">
        <div className="container text-center " style={{margin:"30px"}}>
        <h3>Editar Empleado</h3>

        </div>
        <form onSubmit={(e)=>agregarEmpleado(e)}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input
                    type="text" 
                    className="form-control" 
                    id="nombre"  
                    name="nombre" 
                    required={true}
                    value={nombre}
                    onChange={(e)=>onInputChange(e)}
                    />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="departamento" className="form-label">Departamento</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="departamento" 
                    name="departamento"
                    value={departamento}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label className="sueldo" htmlFor="exampleCheck1">Sueldo</label>
                    <input 
                    type="number" 
                    step="any" 
                    className="form-control" 
                    id="sueldo" 
                    name="sueldo" 
                    value={sueldo}   
                    onChange={(e)=>onInputChange(e)}
                    />
                    
                </div>
                <div className="text-center ">
                    <button 
                    type="submit" 
                    className="btn btn-primary me-3"
                    >Agregar
                    </button>
                    <a href="/" className="btn btn-warning ">Regresar</a>
                </div>
            
                </form>

        </div>
    )
}