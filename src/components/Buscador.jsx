import { useState } from "react"

const Buscador = ({colaboradores, setColaboradoresFiltro}) => {
    const[search, setSearch] = useState("")
    
    const capturaInput = (e) => {
        const colaborador= e.target.value.toLowerCase();
        setSearch(colaborador)

        const ColaboradoresFiltro = colaboradores.filter((usuario) => {
            return Object.values(usuario).some((area) => 
            area.toLowerCase().includes(colaborador)
            )
        })
        setColaboradoresFiltro(ColaboradoresFiltro)
    }
    return (
        <div className="mb-3">
        <input 
        type= 'text'
        className="form-control"
        placeholder='Buscar Usuario'
        value={search}
        onChange={capturaInput}
        />
        </div>
    )
}



export default Buscador;