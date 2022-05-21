import axios from "axios";
import React, {useState, useEffect} from 'react'
import { useSelector,useDispatch  } from 'react-redux';
// import { allData  } from '../../redux/action'
// import { allData  } from '../'
import {Link} from 'react-router-dom'
import {baseUrl} from './config'
import { allData  } from './../redux/action'
// import { useSelector,  } from 'react-redux';

export const Home = () => {
  const data = useSelector(x=>x.data);
  const[user, setuser]=useState([])
 const dispatch = useDispatch()
  console.log('data from redux : ', data)
  const [countryData, setCountryData] =useState([])
  const getData = async ()=>{
   
    try {
      let res= await axios.get(`${baseUrl}/country`);
      let response = await res.data;
      console.log('get Api res', response);
      setCountryData(response)
      setuser(response)
      if(response.status===200){
        dispatch(allData(response))

      }
    } catch (error) {
      console.log('get Api error ', error)
    }
  }
  
  const hadleSubmit = async (id) => {
    // e.preventDefault();
    console.log('id is : ', id)
  try {
    let response = axios.delete(`${baseUrl}/country/${id}`
    );
    let res = await response;
    console.log("submited", res);
    if(res.status===200){
      getData()
    }
  } catch (error) {
    console.log("er", error);
  }

};
useEffect(()=>{
  getData()
  // setuser(data)
}, [])
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>sr no.</th>
            <th>country</th>
            <th>city</th>
            <th>population</th>
            <th><button>edit</button></th>
            <th> <button>delete</button> </th>
          </tr>
        </thead>
        <tbody>
          {
            countryData?.map((item, index)=>{
              const {name,population,country, city}=item
             
              return( 
                <tr key={item.id}>
                <td>{index+1}</td>
                <td> {country} </td>
                <td> {city} </td>
                <td>{population} </td>
                {/* <td> {city} </td> */}
                <td> <button ><Link to={`/edit-city/${item.id}`}>  edit </Link> </button> </td>
                <td> <button onClick={()=>{hadleSubmit(item.id)}}>delete</button> </td>
              </tr>
      

              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
