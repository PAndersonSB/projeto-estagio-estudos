import React from 'react'

export const Cursos = ({cursos}) => {

    console.log('cursos length:::', cursos.length)
    if (cursos.length === 0) return null

    const CursoRow = (curso,index) => {

        return(
              <tr key = {index} className={index%2 === 0?'odd':'even'}>
                  <td>{index + 1}</td>
                  <td>{curso.nome}</td>
              </tr>
          )
    }

    const CursoTable = cursos.map((curso,index) => CursoRow(curso,index))

    return(
        <div className="container">
            <h2>Cursos</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Curso Id</th>
                    <th>Nome</th>
                </tr>
                </thead>
                <tbody>
                    {CursoTable}
                </tbody>
            </table>
        </div>
    )
}