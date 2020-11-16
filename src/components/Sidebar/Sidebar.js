import './Sidebar.scss';

import React, { useState } from 'react';
import logo from '../../assets/iconSmarttbot.png'
import logoExp from '../../assets/smarttbotCompleto.png'
import signal from '../../assets/signal.png'

function Sidebar(props) {

const [open, setOpen] = useState(false)


  return (
    <div className={`Sidebar ${open ? 'open' : ''}`}>
      <div className="container" onClick={() => setOpen(!open) }>
        <img className="smart" src={logo} alt="logo da Smarttbot" />
        <img className="hide" src={logoExp} alt="logo da Smarttbot" />
        <div className="line">

        </div>
        <div>
          <img className="signal" src={signal} alt="barras verdes" />
          <span className="toHide">Análise geral</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

