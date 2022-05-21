import { ADD_COUNTRY,DELETE_DATA, ADD_CITY,EDIT_DATA,ALL_DATA } from './actionType'

const addCountry=(payload)=>{
    return{
        type: ADD_COUNTRY,
        payload,
    }
}

const addCity=(payload)=>{
    return{
        type:ADD_CITY,
        payload,
    }
}

const editCountry=(payload)=>{
    return{
        type:EDIT_DATA,
        payload,
    }
}

const deleteCountry=(payload)=>{
    return{
        type:DELETE_DATA,
        payload,
    }
}
const allData=(payload)=>{
    return{
        type:ALL_DATA,
        payload
    }
}
export {deleteCountry, addCountry, addCity,allData}