import "./style.css"

function infoAluno() {
    const nome = "João Silva"
    const idade = 23
    const curso = "Desenvolvimento de Sistemas"



    return (
        <div className="info-aluno">
            <h2>informações do aluno</h2>
            <p>nome : {nome} </p>
            <p>idade: {idade}</p>
            <p>Curso: {curso}</p>
        </div>
    )
}

export default infoAluno