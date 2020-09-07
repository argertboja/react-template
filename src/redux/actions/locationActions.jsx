import * as actions from './actionTypes'
import axios from 'axios'

export const fetchLocations = () => dispatch => {
    axios.get("http://dev.api.droov.io/play/locations", {headers: {"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQSflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"}})
        .then(response => dispatch({
            type: actions.FETCH_LOCATIONS,
            payload: response.data
        }))
}