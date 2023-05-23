import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './Header';
import { Cursos } from './Cursos';
import { DisplayBoard } from './DisplayBoard';
import CriarCurso from './CriarCurso';
import RemoverCurso from './RemoverCurso';
import TrocarNomeCurso from './TrocarNomeCurso';
import { obterTodosCursos, criarCurso, removerCurso, trocarNomeCurso } from '../services/cursoService';

class App extends Component {
  state = {
    nome: '',
    cursos: [],
    numeroCursos: 0
  };

  componentDidMount() {
    this.obterTodosCursos();
  }

  criarCurso = () => {
    criarCurso(this.state.nome)
      .then(response => {
        console.log(response);
        this.setState(prevState => ({
          numeroCursos: prevState.numeroCursos + 1,
          nome: ''
        }));
        this.obterTodosCursos();
      })
      .catch(error => {
        console.error(error);
      });
  };

  removerCurso = (cursoId) => {
    removerCurso(cursoId)
      .then(response => {
        console.log(response);
        this.setState(prevState => ({
          cursos: prevState.cursos.filter(curso => curso.id !== cursoId)
        }));
        this.obterTodosCursos();
      })
      .catch(error => {
        console.error(error);
      });
  };

  trocarNomeDoCurso = (cursoId, novoNome) => {
    trocarNomeCurso(cursoId, novoNome)
      .then(response => {
        console.log(response);
        this.setState(prevState => ({
          cursos: prevState.cursos.map(curso => {
            if (curso.id === cursoId) {
              return { ...curso, nome: novoNome };
            }
            return curso;
          })
        }));
      })
      .catch(error => {
        console.error(error);
      });
  };

  obterTodosCursos = () => {
    obterTodosCursos()
      .then(cursos => {
        console.log(cursos);
        this.setState({ cursos, numeroCursos: cursos.length });
      })
      .catch(error => {
        console.error(error);
      });
  };

  onChangeForm = (e) => {
    this.setState({ nome: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container mrgnbtm">
          <div className="row">
            <div className="col-md-8">
              <CriarCurso
                nome={this.state.nome}
                onChangeForm={this.onChangeForm}
                criarCurso={this.criarCurso}
              />
              <TrocarNomeCurso cursos={this.state.cursos} trocarNomeCurso={this.trocarNomeDoCurso} />
              <RemoverCurso cursos={this.state.cursos} removerCurso={this.removerCurso} />
            </div>
            <div className="col-md-4">
              <DisplayBoard
                numeroCursos={this.state.numeroCursos}
                obterTodosCursos={this.obterTodosCursos}
              />
            </div>
          </div>
        </div>
        <div className="row mrgnbtm">
          <Cursos cursos={this.state.cursos} />
        </div>
      </div>
    );
  }
}

export default App;
