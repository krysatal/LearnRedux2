import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM }  from './actionTypes'

export const changeInputValue = (value) =>({
    type: CHANGE_INPUT,
    value
})

export const addItemList = () => ({
    type: ADD_ITEM
})

export const deleteItemList = (index) => ({
    type: DELETE_ITEM,
    index
})