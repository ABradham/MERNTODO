// This is a file that creates Actions and ActionCreators for Redux

// Document Imports
import {GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING} from './types';
import axios from 'axios';

export const getItems = () => dispatch => {
    // Set loading field in item reducer state to be true
    dispatch(setItemsLoading());

    // Make GET request to API and dispatch change to our reducer
    axios
    .get('/api/items')
    .then(res => 
        dispatch({type: GET_ITEMS, payload: res.data}));

    // Return to itemReducer the type of "GET_ITEMS"
    return {
        type: GET_ITEMS
    }
}

export const deleteItem = (id) => dispatch => {
    // Return to itemReducer the type of "DELETE_ITEMS" with a payload of the id of the item we want to delete
    axios
    .delete(`api/items/${id}`)
    .then(res => dispatch(
        {
            type: DELETE_ITEM,
            payload: id
        }
    ));
}


export const addItem = (item) => dispatch => {

    // Make POST request to API
    axios
    .post('/api/items', item)
    .then(res =>  
        dispatch({type: ADD_ITEM, payload: res.data}));
}

export const setItemsLoading = () => {
    // Return to itemReducer the type of "ITEMS_LOADING" to set item state object to have a `loading` attribute of true
    return {
        type: ITEMS_LOADING
    }
}