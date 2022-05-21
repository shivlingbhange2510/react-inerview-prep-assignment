import { ADD_COUNTRY,DELETE_DATA, ALL_DATA,ADD_CITY,EDIT_DATA } from './actionType'
const initial = {
    country:[{name:'india'}],
    city:[{city:'pune'}],
    data:[{id:101, city:"mumbai", country:"India"}]
}
const reducer =(state=initial, action)=>{
    const {payload, type} = action;
    // console.log('payload : ', payload, "action : ", action)

    switch(type){
        case ALL_DATA:
            // let x=p
            return{
                ...state, data:[...state.data, payload]
            }
        case ADD_COUNTRY:
            return{
                ...state, country: [...state.country, payload]
            }
        case ADD_CITY:
            return{
                ...state, city: [...state.city, payload],
            }
        default:
            return state
    }

}
export {reducer}