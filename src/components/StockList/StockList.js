import './StockList.scss';
import Stock from './Stock/Stock';
import {  useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react';

function StockList(props) {
  //pra poder acessar o estado do redux
  const reduxState = useSelector(data => data)
  const [listOfStocks, setListOfStocks] = useState([])

  useEffect(() => {
    setListOfStocks(reduxState.stocks.stockList)
  }, [reduxState]);

  function acao () {
    console.log('listOfStocks',listOfStocks)
    console.log('reduxState',reduxState)
  }

  // quantos cards vier
  let element = listOfStocks.map(stock => {
    return (
        <Stock 
        key={stock.id} 
        name={stock.stock_codes}
        dailybalance={stock.daily_balance}
        title={stock.title}
        lastPaper={stock.last_paper}
        />
    )
  })

  return (
    <div className="StockList">
        <Stock />
        <button onClick={() => acao()}>Ver stocks</button>
        <div className="StockList container">
            {element}
        </div>
    </div>
  );
}

export default StockList;
