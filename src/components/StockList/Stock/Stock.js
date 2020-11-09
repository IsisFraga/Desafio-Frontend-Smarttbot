import './Stock.scss';

function Stock(props) {
  return (
    <div className="Stock">
      <div className="Stock__left">
        <div className="Stock__left--title">
          <div className="title-and-id">
            <h2>
              {props.title}
            </h2>
            <p>
              #{(Math.random()*10000000).toFixed(0)}
            </p>
          </div>
        <div className="Stock__left--status">
          <div className={`status-ball ${props.status === 0 ? 'on' : 'off'}`}></div>
          <div className="status-text">{props.status === 0 ? 'Em execução' : 'Pausado'}</div>
        </div>
        </div>
      </div>
      <div className="Stock__right">

      </div>
    </div>
  );
}

export default Stock;
