import React from 'react';

const RemoverCurso = ({ cursos, removerCurso }) => {
  return (
    <div>
      <h2>Remover Curso</h2>
      {cursos.map(curso => (
        <div key={curso.id}>
          <span>{curso.nome}</span>
          <button type="button" onClick={() => removerCurso(curso.id)}>
            Remover
          </button>
        </div>
      ))}
    </div>
  );
};

export default RemoverCurso;
