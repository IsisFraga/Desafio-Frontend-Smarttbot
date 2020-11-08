import ApiCall from '../Api'
import FakeApi from './FakeApi'

function StockData () {
    const api = ApiCall ()

    //Api is not working for some reason.
    //I'm using a fake api to return the data.

    function getStocks () {
        return FakeApi
    }

    async function getRandomDogImg () {
        const endpoint = 'https://dog.ceo/api/breeds/image/random'

        const data = await api.get(endpoint);
        return Promise.resolve(data)
    }

    return {
        getRandomDogImg,
        getStocks
    }
}

export default new StockData()