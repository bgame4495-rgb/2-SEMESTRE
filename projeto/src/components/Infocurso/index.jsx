import { useState } from "react"
import "./style.css"

function infocurso() {
    const [nome,setNome] = useState("Programação de aplicativos")
    const [cargaHoraria, setCargaHoraria] = useState(90)
    const [local, setLocal]= useState("Senai")

    return (
        <div className="info-curso">
            <h2>Dados do Curso:</h2>
            <p>Nome: {nome} </p>
            <p>Carga horaria: {cargaHoraria}</p>
            <p>Local: {local}</p>

        </div>
    )
}

export default infocurso