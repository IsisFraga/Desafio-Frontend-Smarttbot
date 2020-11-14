import StockData from '../../services/StockData'

// Action Types

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
        return {...initialState, stockList: action.listOfStocks};
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
  export const startLoading = () => ({ type: 'stocks/STARTLOADING' });
  export const goGetStocks = (list) => ({ type: 'stocks/GETSTOCKS', 
listOfStocks: list.data.data });

  export const getStocks = () => async (dispatch) => {
    dispatch(startLoading())
    try {
      const data = await StockData.getRobotList()
      return dispatch(goGetStocks(data))
    } catch (e) {
      console.log('Error:', e)
    }
  }
  

