export async function obterTodosCursos() {

    const response = await fetch('/api/cursos');
    return await response.json();
}

export async function criarCurso(data) {

    const response = await fetch('/api/cursos/inserir/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"nome": data})
      })
    return await response.json();
}

export async function removerCurso(cursoId) {
  const response = await fetch(`/api/cursos/delete/${cursoId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
}



export async function trocarNomeCurso(cursoId, novoNome) {
  const response = await fetch(`/api/cursos/alterar/${cursoId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome: novoNome })
  });
  if (!response.ok) {
    throw new Error('Erro ao trocar o nome do curso');
  }
  return await response.json();
}



