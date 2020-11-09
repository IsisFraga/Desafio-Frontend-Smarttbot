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

  const element = []
  // quantos cards vier
  listOfStocks.forEach((stock, index) => {
    let info =  (
        <Stock 
        key={stock.id} 
        name={stock.stock_codes}
        dailybalance={stock.daily_balance}
        title={stock.title}
        lastPaper={stock.last_paper}
        status={stock.running}
        lastUpdate={stock.updated_at}
        />
    )
    if (index < 4) { element.push(info) }
  })

  return (
    <div className="StockList">
        <div className="StockList container">
            {element}
        </div>
    </div>
  );
}

export default StockList;
