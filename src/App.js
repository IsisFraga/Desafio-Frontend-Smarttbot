import './App.css';
import Header from './components/Header/Header'

function App() {
  var dados = [
    {
      nome: 'WING20',
      valor: 114093.33, 
      tradesNoDia: 10,
    },
    {
      nome: 'BIDI4',
      valor: 20.11, 
      tradesNoDia: 5,
    },
    {
      nome: 'ABEV3',
      valor: 13.12, 
      tradesNoDia: 4,
    },
    {
      nome: 'WEGE3',
      valor: 60.25, 
      tradesNoDia: 310,
    },

  ]
  
  var elementos = dados.map(dado => {
    return (
      <Header ravizinho={dado.nome} trades={dado.tradesNoDia}/>
    )
  })

  return (
    <div className="App">
     {elementos}
    </div>
  );
}

export default App;
