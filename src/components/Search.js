import React, { useState } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Search() {

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const [addCountry, setAddCountry] = useState("");
  const [addCity, setAddCity] = useState("");

  const navigate = useNavigate();

  const onClickSendText = () => {
    // setAddCountry(country);
    // setAddCity(city);
    // setCountry("");
    // setCity("");
    //console.log("Inputted country is " + country + " and inputted city is " + city);

    axios.post('http://127.0.0.1:5000', {
      country: country,
      city: city,
    })
      .then(function (response) {
        console.log("Responsed by Flask")
        //console.log("Country is : " + response.data.country);
        const resultCountry = response.data.country;
        const resultCity = response.data.city;
        navigate("/result", { state: { country: resultCountry, city: resultCity } });
      })
      .catch(function (error) {
        console.log(error);
      });



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
        {/* <Link to={{ pathname: "/result", state: {country: country, city: city} }}> */}
        {/* Linkを使用した値の渡し方に関してはhttps://bunsugi.com/react-page-state/　このサイトを参照したが、記述方法が変わったのかうまく値を渡せなかった */}
        <button type="button" onClick={onClickSendText}>Submit</button>
        {/* </Link> */}
      </form>
      <br></br>
      <div>Interactive Country: {country}</div>
      <div>Interactive City: {city}</div>
    </div>
  )

}

export default Search;


// 　　　　　2時間くらいずっと、Linkタグを設定してページ遷移できるようになったのはいいがどのように値を遷移先に渡せるのかで格闘していた
//         →https://zenn.dev/horisan/articles/2aeaf0bd3fb70f#%E8%A3%9C%E8%B6%B3というサイトで有益な情報が載っていたので
//         その通りにuseNavigate()を使用しても遷移先でTypeError: Cannot read properties of null (reading ‘country’)
//         というエラーが出ており情報が渡せなかった
//         →よくよくみてみると、useNavigate()のみで画面を遷移できるはずなのに、元々のLinkタグがずっと残っており、こちらが優先的に適用されてしまっていた
//         →Linkタグを削除するとうまく値が渡せた！！