
import './App.scss';

import React from 'react';

// eslint-disable-next-line
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import StockList from './components/StockList/StockList'

function App() {

  return (
    <div className="App">
      <div className="sidearea">
        <Sidebar/>
      </div>
      <div className="contentArea">
      <Header/>
      <StockList/>
      </div>

     {/* {elementos} */}
    </div>
  );
}

export default App;
