import './StockList.scss';
import Stock from './Stock/Stock';
import { useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react';

function StockList(props) {
  //pra poder acessar o estado do redux
  const reduxState = useSelector(data => data)
  const [listOfStocks, setListOfStocks] = useState([])


   useEffect(() => {
    if (reduxState.stocks.stockList.length) {
      setListOfStocks(reduxState.stocks.stockList)
    }
   },[reduxState]) 

  const element = []
  // quantos cards vier
  listOfStocks.forEach((stock, index) => {
    let info =  (
        <Stock 
        key={stock.id} 
        id={stock.id} 
        name={stock.stock_codes}
        dailybalance={stock.daily_balance}
        papervalue={stock.last_paper?.paper_value}
        profit={stock.last_paper?.profit}
        position={stock.last_paper?.position}
        type={stock.last_paper?.type}
        title={stock.title}
        lastpaper={stock.last_paper?.paper}
        status={stock.running}
        lastupdate={stock.updated_at}
        initialcapital={stock.initial_capital}
        trades={stock.number_trades}
        />
    )
    if (index < props.numberOfRobots) { element.push(info) }
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
