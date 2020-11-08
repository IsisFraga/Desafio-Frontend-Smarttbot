import Axios from 'axios'

const ApiCall = () => {
    const config = {
        headers: {
            common: {
                'Content-Type' : 'application/json',
            },
        },
    }

    const instance = Axios.create(config)

    return instance
} 

export default ApiCall