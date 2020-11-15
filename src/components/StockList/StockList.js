import './StockList.scss';
import Stock from './Stock/Stock';
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState, useCallback } from 'react';
import * as actions from '../../store/ducks/stocks'

function StockList(props) {
  //pra poder acessar o estado do redux
  const reduxState = useSelector(data => data)
  const [listOfStocks, setListOfStocks] = useState([])
  const [numberOfRobots, setNumberOfRobots] = useState(14)

   //pra poder usar as ações do redux
   const dispatch = useDispatch()


   //toda função que entra no useEffect recebe useCallback e entra no array do useEffect
   const getStocksHandler = useCallback( async () => {
     const {getStocks} = actions
     await dispatch(getStocks())
   }, [dispatch]);
 
   //onload do react
   useEffect(() => {
     getStocksHandler()
   }, [getStocksHandler])

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
    if (index < numberOfRobots) { element.push(info) }
  })

  return (
    <div className="StockList">
        <div className="StockList container">
            {element}
        </div>
        <button onClick={() => setNumberOfRobots(numberOfRobots + 1)}> Adicionar Robo</button>
    </div>
  );
}

export default StockList;
