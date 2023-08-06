import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Result = () => {

  const location = useLocation();
  // 下記の記述で、渡ってきたlocation.stateの情報がselectInfoに渡される(const { state} という記述ではエラーが出てしまった)
  const [selectInfo, setSelectInfo] = useState(location.state);

  // setSelectInfo' is assigned a value but never usedというエラーが出続けているが、値を遷移元から受け取るだけならsetをする必要がないし
  // 使用しなくても良さそう

  console.log("selected country is : " + selectInfo.country + ", and selected city is " + selectInfo.city);

  return (
    <div>
      <h3>This is result page</h3>
      <p>Country: {selectInfo.country}</p>
      <p>City: {selectInfo.city}</p>
    </div>
  );


}

export default Result;
