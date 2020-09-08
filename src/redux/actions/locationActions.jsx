import * as actions from './actionTypes'
import axios from 'axios'

const authorization = {headers: {"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQSflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"}}

export const fetchLocations = () => dispatch => {
    axios.get("http://dev.api.droov.io/play/locations", authorization)
        .then(response => dispatch({
            type: actions.FETCH_LOCATIONS,
            payload: response.data
        }))
}

export const addLocation = (locationData) => dispatch => {
    axios.post("http://dev.api.droov.io/play/locations/add", locationData, authorization)
        .then(response => dispatch({
            type: actions.ADD_LOCATION,
            payload: response.data
        }))
}

export const deleteLocation = (locationId) => dispatch => {
    axios.delete('http://dev.api.droov.io/play/locations/' + locationId, authorization)
        .then(response => dispatch({
            type: actions.DELETE_LOCATION,
            payload: response.data
        }))
}