// Action Types
import FakeApi from '../../services/StockData/FakeApi'

export const Types = {
    GETSTOCKS: 'stocks/GETSTOCKS',
    FINISHGETTINGSTOCKS: 'stocks/FINISHGETTINGSTOCKS',
    STARTLOADING:'stocks/STARTLOADING',
    FINISHLOADING:'stocks/FINISHLOADING',
  };
  
  // Reducer
  
  const initialState = {
    stockList: [],
    loading: false,
  };
  
  export function stocks(state = initialState, action) {
    switch (action.type) {
      case Types.GETSTOCKS:
        const payload = getStocks()
        console.log('payload', payload)
        return {...initialState, loading: true, stockList: payload.listOfStocks};
      case Types.FINISHGETTINGSTOCKS:
        return {...initialState, loading: false};
      case Types.STARTLOADING:
        return {...initialState, loading: true};
      case Types.FINISHLOADING:
        return {...initialState, loading: false};
      default:
        return state;
    }
  }

  // Action Creators
  
  export function getStocks() {
    return {
        listOfStocks: FakeApi,
    }
  }
  

