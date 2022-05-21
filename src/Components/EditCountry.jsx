import axios from "axios";
import React, { useState,useEffect } from "react";
import {Link, useParams} from 'react-router-dom'
// City name, Population and Country it belongs to
import { baseUrl } from "./config";
  import { useSelector,useDispatch  } from 'react-redux';
import { allData  } from './../redux/action'

export const EditCountry = (props) => {
  const[newData, setNewdata]=useState()
  const {id}=useParams();
  const [formData, setFormdata] = useState({ 
    city: newData?.city,
    country: newData?.country,
    population: newData?.population,
  });
  const data = useSelector(val=>val);
const dispatch=useDispatch();
  const hadnleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formData,
      [name]: value,
    });
    console.log("submited", formData);
  };
  const { city, country, population } = formData;

  const hadleSubmit = async (e) => {
      // e.preventDefault();
      // dispatch(allData(formData))
    try {
      let response = axios.get(`${baseUrl}/country/${id}`);
      let res = await response;
      console.log("get by id ", res.data);
      setNewdata(res.data)
    } catch (error) {
      console.log("er", error);
    }
  };
  const editedData= async()=>{
    try {
      let response = await axios.patch(`${baseUrl}/country/${id}`, formData)      ;
      let res = await response;
      console.log("get by id ", res.data);
      setNewdata(res.data)
    } catch (error) {
      console.log("er", error);
    }

  }
  useEffect(()=>{
    hadleSubmit()
  },[])
  return (
    <div>
      {newData&&
      <>
      <h1>Add City Details  {id} </h1>
      <form onSubmit={hadleSubmit}>
        <div>
          <h4> city name: </h4>
         {newData?.city&&<input
            type="text"
            defaultValue={newData?.city}
            placeholder="city name ..."
            name="city"
            value={city}
            onChange={hadnleChange}
          />
        }
        </div>
        <div>
          <h4> country Name: </h4>
          <input
            type="text"
            placeholder="country name ..."
            name="country"
            defaultValue={newData?.country}

            value={country}
            onChange={hadnleChange}
          />
        </div>
        <div>
          <h4> population : </h4>
          <input
            type="text"
            placeholder="population  ..."
            name="population"
            defaultValue={newData?.population}

            value={population}
            onChange={hadnleChange}
          />
        </div>
        <br />
        <div>
          <input type="button" value="submit" />
          <button onClick={editedData}><Link to='/'>Submit now </Link> </button>
        </div>
      </form>
      </>
      }
    </div>
  );
};
