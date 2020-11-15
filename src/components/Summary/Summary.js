import './Summary.scss';
import React, { useState , useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'


function Summary (props) {

    const [transactions, setTransactions] = useState(0)
    const [summary, setSummary] = useState(0)
    const [papers, setPapers] = useState([])
    const reduxState = useSelector(data => data)
    const getData = useCallback(() => {
        if (reduxState.stocks.overview) {
            setTransactions(reduxState.stocks.overview.transactions)
            setSummary(reduxState.stocks.overview.moviment_summary)
            setPapers(reduxState.stocks.overview.papers)
        }
    }, [reduxState.stocks.overview])

    const paperList = () => {
        const element = []
        

        if (papers.length){
            papers.forEach((paper, index) => {
                let info =  (
                    <div className="stock" key={paper.name+paper.trasactions}>
                        <div className="name">
                            {paper.name}
                        </div>
                        <div className="separator">
                        </div>
                        
                        <div className="transactions">
                            <p>
                                <span> {paper.trasactions} </span>transações
                            </p>
                        </div>
                    </div>
                )
                element.push(info)
            })
        }
        return element;
    }

    useEffect(() => {
        getData()
        console.log('teste', reduxState);
    }, [reduxState]) 

    return (
        <>
        <div className={ `nosummary ${props.real ? '' : 'simulated'}`}>
            <p className="info">Não há dados de transação no modo simulado!</p>
            
        </div>
        <div className={ `summary ${props.real ? '' : 'simulated'}`}>
            <h2>
                Resumo geral operações
            </h2>
            <div className="summary__infos">
                <div className="summary__infos--money">
                    <h3>
                        Resumo de movimentação
                    </h3>
                    <h4 className={summary > -0.0000001 ? 'positive' : 'negative'}>
                    {summary >= 0 ? '' : '-'}R${summary}
                    </h4>
                </div>
                <div className="summary__infos--transactions">
                     <h3>
                        Total de transações realizadas
                    </h3>
                    <h4>
                        {transactions}
                    </h4>
                </div>
            </div>
            <div className="line">

            </div>
            <div className="summary__stocks">
                <h3>
                    Papéis negociados
                </h3>
                <div className="summary__stocks--list">
                    <div className="left">
                        {paperList()}
                    </div>
                    <div className="right">
                    <div className="stock">
                            <div className="name">
                                SMRT4
                            </div>
                            <div className="separator">
                            </div>
                            
                            <div className="transactions">
                                <p>
                                    <span> 1557 </span>transações
                                </p>
                            </div>
                        </div>
                        <div className="stock">
                            <div className="name">
                                BIDI4
                            </div>
                            <div className="separator">
                            </div>
                            
                            <div className="transactions">
                                <p>
                                    <span> 215 </span>transações
                                </p>
                            </div>
                        </div>
                        <div className="stock">
                            <div className="name">
                                BOVA11
                            </div>
                            <div className="separator">
                            </div>
                            
                            <div className="transactions">
                                <p>
                                    <span> 71 </span>transações
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    );
}

export default Summary;