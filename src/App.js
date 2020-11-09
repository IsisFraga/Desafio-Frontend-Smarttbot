import './App.scss';

import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

// eslint-disable-next-line
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import StockList from './components/StockList/StockList'

function App() {

  //pra poder acessar o estado do redux
  const reduxState = useSelector(data => data)
  
  //pra poder usar as ações do redux
  const dispatch = useDispatch()


  //toda função que entra no useEffect recebe useCallback e entra no array do useEffect
  const getStocksHandler = useCallback(() => {
    dispatch({
      type: 'stocks/GETSTOCKS'
    })
  }, [dispatch]);

  //onload do react
  useEffect(() => {
    getStocksHandler()
  }, [getStocksHandler])

  //funçãozinha de buenas, relevante só pro componente
  function listStocksHandler () {
    console.log('reduxState', reduxState)
  }

  return (
    <div className="App">
      <div className="sidearea">
      <Sidebar/>
      </div>
      <div className="contentArea">
      <Header/>
      <StockList/>
      </div>

      <button onClick={() => listStocksHandler()}>Listar ações</button>
     {/* {elementos} */}
    </div>
  );
}

export default App;
