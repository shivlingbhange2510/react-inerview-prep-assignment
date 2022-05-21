import axios from "axios";
import React, { useState } from "react";
import {Link} from 'react-router-dom'
// City name, Population and Country it belongs to
import { baseUrl } from "./config";
  import { useSelector,useDispatch  } from 'react-redux';
import { allData  } from './../redux/action'

export const AddCity = (props) => {
  const [formData, setFormdata] = useState({ 
    city: "",
    country: "",
    population: "",
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
      e.preventDefault();
      dispatch(allData(formData))
    try {
      let response = axios.post(`${baseUrl}/country`, {
        ...formData, id:Math.random().toFixed(3)*1000
      });
      let res = await response;
      console.log("submited", res);
    } catch (error) {
      console.log("er", error);
    }

  };
  return (
    <div>
      <h1>Add City Details</h1>
      <form onSubmit={hadleSubmit}>
        <div>
          <h4> city name: </h4>
          <input
            type="text"
            placeholder="city name ..."
            name="city"
            value={city}
            onChange={hadnleChange}
          />
        </div>
        <div>
          <h4> country Name: </h4>
          <input
            type="text"
            placeholder="country name ..."
            name="country"
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
            value={population}
            onChange={hadnleChange}
          />
        </div>
        <br />
        <div>
          <input type="button" value="submit" />
          <button onClick={hadleSubmit}><Link to='/'>Submit now </Link> </button>
        </div>
      </form>
    </div>
  );
};
