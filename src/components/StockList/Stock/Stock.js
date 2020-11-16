import './Stock.scss';
import seta from '../../../assets/arrow.svg'
import more from '../../../assets/more.svg'
import pause from '../../../assets/pause.svg'
import chart from '../../../assets/grafico.png'

function Stock(props) {
  function returnValue (value) {
    if (value) {
      return value.toFixed(2).toString().replace('.', ',')
    }
  }
  function returnNegative (value) {
    if (value) {
      return value.toFixed(2).toString().replace('.', ',').replace('-', '')
    }
  }
  
  return (
    <div className="Stock">
      <div className="Stock__left">
        <div className="Stock__left--title-status">
          <div className="title-and-id">
            <h2>
              {props.title}
            </h2>
            <p>
              #{props.id}
            </p>
          </div>
            <div className="Stock__left--status">
              <div className={`status-ball ${props.status === 0 ? 'on' : 'off'}`}></div>
              <div className="status-text">{props.status === 0 ? 'Em execução' : 'Pausado'}</div>
            </div>
        </div>
        <div className="Stock__left--rectangles">
          <p>
            <span className="rectangles">
              Pessimista
            </span>
            <span className="rectangles">
              WIN%
            </span>
            <span className="rectangles">
              Price Action
            </span>
          </p>
        </div>
        <div className={ `Stock__left--main ${props.status === 0 ? 'on' : 'off'}`}>
          <div className="amount">
          {props.position}
          </div>
          <div className="paper-name">
            <h2>
            {props.lastpaper}
            </h2>
            <p>
            {props.type === 1 ? 'Compra' : 'Venda'}
            </p>
          </div>
          <div className="value">
            <p>
              {props.papervalue}
            </p>
            <h4 className={props.profit > -0.0000001 ? 'positive' : 'negative'}>
            R${returnValue(props.profit)}
            </h4>
          </div>
        </div>
        <div className="Stock__left--bottom">
          <div className="left">
            <p>
              Saldo diário <img className="arrow" src={seta} alt="seta"/>
            </p>
            <h3 className={props.dailybalance > -0.0000001 ? 'positive' : 'negative'}>
              {props.dailybalance > 0 ? '' : '-'}
              R$
              {returnNegative(props.dailybalance)}
            </h3>
          </div>
          <div className="right">
            <p>
              Trades no dia
            </p>
            <h4>
              {props.trades}
            </h4>
          </div>
        </div>
      </div>
      <div className="Stock__right">
        <div className="Stock__right--header">
          <div className="head-left"> 
            <h2>
              Histórico do dia
            </h2>
            <p>
              última atualização • (mock)
            </p>
          </div>
          <div className="head-right"> 
          <img className="pause" alt="pause" src={pause}/><img className="more" alt="mais" src={more}/>
          </div>
        </div>
        <div className="Stock__right--main">
          <img alt="grafico" src={chart}/>
        </div>
      </div>
    </div>
  );
}

export default Stock;
