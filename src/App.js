
import './App.scss';


// eslint-disable-next-line
import Header from './components/Header/Header'
import Summary from './components/Summary/Summary'
import AddRobot from './components/AddRobot/AddRobot'
import Sidebar from './components/Sidebar/Sidebar'
import StockList from './components/StockList/StockList'
import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux'
import * as actions from './store/ducks/stocks'

function App() {
  const [numberOfRobots, setNumberOfRobots] = useState(4) 
  const [availableRobots, setAvailableRobots] = useState(4)
  const [self, setSelf] = useState(true);

     const dispatch = useDispatch()


     const fetchDataHandler = useCallback( async () => {
       const {getStocks, getOverview} = actions
       await dispatch(getStocks())
       await dispatch(getOverview())
     }, [dispatch]);

    
     useEffect(() => {
       fetchDataHandler()
     }, [fetchDataHandler])


  function addRobots(){
    if (availableRobots > 0) {
      setNumberOfRobots(numberOfRobots + 1)
      setAvailableRobots(availableRobots - 1)
    } else {
      alert('Você não tem mais nenhum robô disponível!')
    }
  }

  return (
    <div className="App">
      <div className="sidearea">
        <Sidebar/>
      </div>
      <div className="contentArea">
        <Header self={self} changeSelf={() => setSelf(!self)}/>
        <Summary real={self}/>
        <AddRobot robot="props" newRobot={() => addRobots()}
        availableRobots={availableRobots} />
        <StockList numberOfRobots={numberOfRobots}/>
      </div>
    </div>
  );
}

export default App;
