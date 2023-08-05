import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Search() {

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const [addCountry, setAddCountry] = useState("");
  const [addCity, setAddCity] = useState("");

  const onClickSendText = () => {
    setAddCountry(country);
    setAddCity(city);
    setCountry("");
    setCity("");
    console.log("Inputted country is " + country + " and inputted city is " + city);
  }


  // handleSubmit = async (event) => {
  //   event.preventDefault();

  //   if (this.state.country == null || this.state.city == null) {
  //     // setError("Null value is not allowed.");
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append("country", this.state.country)
  //   formData.append("city", this.state.city);

  //   const response = await axios.post("http://101030303", formData, {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //     responseType: "json",
  //     // これで合っているか確認
  //   });

  //   // const navigate = useNavigate();
  //   // console.log("Executed");
  //   // navigate("/result");

  //   window.location("/result");


  // }


  return (
    <div>
      <h3>Please enter country name and city name. We will provide the information about the city you entered.</h3>
      <form>
        <p>Country Name: <input value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Country Name" /></p>
        <p>City Name: <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="City Name" /></p>
        <button type="button" onClick={onClickSendText} component={Link} to="/result">Submit</button>
      </form>
      <br></br>
      <div>Interactive Country: {country}</div>
      <div>Interactive City: {city}</div>
      <div>Result of Country: {addCountry}</div>
      <div>Result of City: {addCity}</div>
    </div>
  )

}

export default Search;


// onChange={this.handleCountry.bind(this)}
// onChange={this.handleCity.bind(this)}
// onClick={this.handleSubmit.bind(this)}