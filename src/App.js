import './App.css';
// eslint-disable-next-line
import Header from './components/Header/Header'
import StockList from './components/StockList/StockList'
import {  useSelector, useDispatch } from 'react-redux'
import React, { useEffect,  useCallback } from 'react';

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
      <StockList/>
      <Header/>
      <button onClick={() => listStocksHandler()}>Listar ações</button>
     {/* {elementos} */}
    </div>
  );
}

export default App;
