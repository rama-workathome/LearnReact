import axios from 'axios'

const url='http://localhost:3001/persons'

const getData = () => {
    return axios.get(url)
}

const putData = (person) => {
    return axios.post(url, person)
}

export default {
    getData: getData, 
    putData: putData
}
