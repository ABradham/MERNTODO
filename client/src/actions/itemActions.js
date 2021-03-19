// This is a file that specifies / define what actions that apply to todo-list items we can take

// Document Imports
import {GET_ITEMS, ADD_ITEM, DELETE_ITEM} from './types';

export const getItems = () => {
    // Return to itemReducer the type of "GET_ITEMS"
    return {
        type: GET_ITEMS
    }
}

export const deleteItem = (id) => {
    // Return to itemReducer the type of "DELETE_ITEMS" with a payload of the id of the item we want to delete
    return {
        type: DELETE_ITEM,
        payload: id
    }
}


export const addItem = item => {
    // Return to itemReducer the type of "ADD_ITEMS" with a payload of the item object we want to create
    return {
        type: ADD_ITEM,
        payload: item
    }
}