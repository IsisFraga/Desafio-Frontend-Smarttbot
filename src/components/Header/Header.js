import './Header.scss';
import symbol from '../../assets/signal.png';
import ToggleButton from 'react-toggle-button'

function Header(props) {

  return (
    <div className="header">
      <div className="header__left"> 
        <img src={symbol} alt="barras verdes"/>
        <div className="header__left--bar"></div>
        <h3>
        Análise Geral 
        </h3>
        <p className="header__left--divide">
        /
        </p>
        <h4>
          Principal
        </h4>
      </div>
      <div className="header__right">
        <p className={`header__right--simulated ${props.self ? 'on' : 'off'}`}>
          Modo Simulado
        </p>
        <div className="header__right--toggle">
          <ToggleButton
          value={ props.self || false }
          onToggle={() => {
          props.changeSelf()
          }} />
        </div>
        <p className={`header__right--real ${props.self ? 'off' : 'on'}`}>
          Modo Real
        </p>
      </div> 
    </div>
  );
}

export default Header;

