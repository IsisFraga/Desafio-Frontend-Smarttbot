import './Sidebar.scss';

import React, { useEffect, useState } from 'react';

import StockData from '../../services/StockData'

function Sidebar(props) {
  // tudo que seu componente vai apresentar de informação
  // que não é fixa, ou seja que pode vir de api
  const [dog, setDog] = useState();

  // tudo que seu componente executa de função só uma vez. ou seja, no inicio dele
  // no inicio
  useEffect(() => {
    teste()
  }, []);

  // função que ele precisa
  async function teste() {
  }

  return (
    <div className="Sidebar">
      Análise Geral {props.ravizinho} {props.trades}
    </div>
  );
}

export default Sidebar;

