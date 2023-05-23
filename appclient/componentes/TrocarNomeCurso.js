import React, { Component } from 'react';

class TrocarNomeCurso extends Component {
  state = {
    cursoId: '',
    novoNome: ''
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { cursoId, novoNome } = this.state;
    this.props.trocarNomeCurso(cursoId, novoNome);
    this.setState({ cursoId: '', novoNome: '' });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { cursos } = this.props;
    return (
      <div>
        <h2>Trocar Nome do Curso</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Curso:</label>
            <select
              name="cursoId"
              className="form-control"
              value={this.state.cursoId}
              onChange={this.handleChange}
              required
            >
              <option value="">Selecione um curso</option>
              {cursos.map(curso => (
                <option key={curso.id} value={curso.id}>{curso.nome}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Novo Nome:</label>
            <input
              type="text"
              name="novoNome"
              className="form-control"
              value={this.state.novoNome}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Trocar Nome</button>
        </form>
      </div>
    );
  }
}

export default TrocarNomeCurso;
