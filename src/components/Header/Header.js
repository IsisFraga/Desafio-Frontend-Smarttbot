import './Header.scss';

function Header(props) {
  return (
    <div className="Header">
      Análise Geral {props.ravizinho} {props.trades}
    </div>
  );
}

export default Header;
