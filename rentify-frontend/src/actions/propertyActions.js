import axios from 'axios';
import { returnErrors } from './errorActions';

import {
    GET_PROPERTIES,
    ADD_PROPERTY,
    DELETE_PROPERTY,
    PROPERTY_ERROR
} from './types';

// Get Properties
export const getProperties = () => dispatch => {
    axios
        .get('/api/properties')
        .then(res =>
            dispatch({
                type: GET_PROPERTIES,
                payload: res.data
            })
        )
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: PROPERTY_ERROR
            });
        });
};

// Add Property
export const addProperty = property => dispatch => {
    axios
        .post('/api/properties', property)
        .then(res =>
            dispatch({
                type: ADD_PROPERTY,
                payload: res.data
            })
        )
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: PROPERTY_ERROR
            });
        });
};

// Delete Property
export const deleteProperty = id => dispatch => {
    axios
        .delete(`/api/properties/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_PROPERTY,
                payload: id
            })
        )
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: PROPERTY_ERROR
            });
        });
};
