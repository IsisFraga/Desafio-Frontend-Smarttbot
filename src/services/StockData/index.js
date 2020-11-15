import ApiCall from '../Api'
// import FakeApi from './FakeApi'

function StockData () {
    const api = ApiCall ()

    
    //Api is not working for some reason.
    //I'm using a fake api to return the data.

    // function getStocks () {
    //     return FakeApi
    // }

    async function getRobotList () {
        const endpoint = 'https://api-front-test.k8s.smarttbot.com/api/v1/robot'
        const data = api.get(endpoint);
        return Promise.resolve(data)
    }
    async function getRobotOverview() {
        const endpoint = 'https://api-front-test.k8s.smarttbot.com/api/v1/robot/overview'
        const data = api.get(endpoint);
        return Promise.resolve(data)
    }

    return {
        getRobotList,
        getRobotOverview
        
    }
}

export default new StockData()