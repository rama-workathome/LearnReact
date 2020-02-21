import axios from 'axios'

const url='http://localhost:3001/persons'

const getData = () => {
    return axios.get(url)
}

const putData = (person) => {
    return axios.post(url, person)
}

const removeData = (id) => {
    return axios.delete(url + '/' + id)

}
export default {
    getData: getData, 
    putData: putData,
    removeData: removeData
}
