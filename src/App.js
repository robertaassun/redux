import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Menu from './components/menu'

function App() {
  const [ inputArtistas, setInputArtistas ] = React.useState("")  
  const [ inputTitulo, setInputTitulo ] = React.useState("")

  const artistas = useSelector((state) => state.artistasReducer.artistas)
  const statetitulo = useSelector((state) => state.artistasTitulo.titulo)

  const dispatch = useDispatch()

  function adicionarArtista(event){
    event.preventDefault()

    const objArtista = {
      nome: inputArtistas
    }
    dispatch({type: 'ADICIONAR', value: objArtista})
  }

  function alterarTitulo(event){
    setInputTitulo(event.target.value)
    dispatch({type: "ALTERAR", value: event.target.value})
  }

  return (
    <div className="container bg-dark text-white pt-1 mt-4 pb-4">
      <h1>Escola de artes</h1>
      <br />
      <Menu />
      <form>
        <input placeholder="Escolha o tema" value={inputTitulo} onChange={alterarTitulo}/>
      </form>

      <h1>{statetitulo}</h1>
      <br/><br/>
      <form onSubmit={adicionarArtista}>
        <input placeholder="Nome dos atores" value={inputArtistas} onChange={(event) => setInputArtistas(event.target.value)}/><br/><br/>
        <button className="btn btn-secondary">Enviar</button>
      </form>
      {artistas.map((artista, index) => {
        return (
          <li key={index}>{artista.nome}</li>
        )
      })}
    </div>
  );
}

export default App;
