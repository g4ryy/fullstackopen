import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl).then(response => response.data)
}

const create = newObject => {
    return axios.post(baseUrl, newObject).then(response => response.data)
}

const delContact = id => {
    return axios.delete(`${baseUrl}/${id}`).then(response => response.data)
}

const update = (id, newContact) => {
    return axios.put(`${baseUrl}/${id}`, newContact).then(response => response.data)
}

export default {getAll, create, delContact, update}