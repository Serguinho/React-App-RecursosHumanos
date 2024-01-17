import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ListadoEmpleados } from "./empleado/ListadoEmpleados";
import { Navegacion } from "./plantilla/Navegacion";
import { AgregarEmpleado } from "./empleado/AgregarEmpleado";
import { EditarEmpleado } from "./empleado/EditarEmpleado";


function App() {
  return (
    <div>

    <Router>
      <Navegacion/>
      <Routes>
        <Route path="/" element={<ListadoEmpleados/>}/>
        <Route path="/agregar" element={<AgregarEmpleado/>}/>
        <Route path="/editar/:id" element={<EditarEmpleado/>}/>
      </Routes>
      
    </Router>
    </div>
  )
}

export default App;
