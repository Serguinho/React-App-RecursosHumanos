import axios from "axios";
import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { Await, Link, useNavigate, useParams } from "react-router-dom";


export const ListadoEmpleados = () => {

  const urlBase = "http://localhost:8080/rh-app/empleados";
 // const {id} = useParams();
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    cargarEmpleados();

  }, [])

  const cargarEmpleados = async () => {
    const resultado = await axios.get(urlBase);
    //console.log(resultado.data)
    setEmpleados(resultado.data)
  }
  const eliminarEmpleado = async(id)=>{
    await axios.delete(`${urlBase}/${id}`);
    console.log(`${urlBase}/${id}`);
    cargarEmpleados();
   

  }
    return (

      <div className="container">

        <div className="container text-center" style={{ margin: "30px" }}>
          <h1> Listado de empleados</h1>
        </div>

        <table className="table table-striped table-hover align-middle ">
          <thead className="table-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Departamento</th>
              <th scope="col">Sueldo</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              empleados.map((empleado)=>(
              <tr key={empleado.idEmpleado}>
                <th scope="row">{empleado.idEmpleado}</th>
                <td>{empleado.nombre}</td>
                <td>{empleado.departamento}</td>
                <td><NumericFormat
                  value={empleado.sueldo}
                  displayType="text"
                  thousandSeparator=','
                  prefix="$"
                  decimalScale={2}
                  fixedDecimalScale 
                />
                </td>
               
                <td className="text center">
                  <div>
                      <Link 
                      to={`/editar/${empleado.idEmpleado}`}
                      className="btn btn-warning btn-sm me-3"
                      >Editar</Link>
                      <button
                      className="btn btn-danger btn-sm"
                      onClick={()=>eliminarEmpleado(empleado.idEmpleado)}
                      >Eliminar</button>
                    </div>
                </td>
              </tr>
              ))
            }
          </tbody>
        </table>


      </div>


    )
  }
