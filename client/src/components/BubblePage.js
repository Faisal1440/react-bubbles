import React, { useState, useEffect } from "react";
import axiosWithAuth from '../auth/axiosWithAuth';
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // _________________fetch your colors data from the server when the component mounts
  
  useEffect (() => {
    axiosWithAuth()
  .get('colors')
  .then((res)=> {
  // __________________set that data to the colorList state property
    setColorList(res.data)
    })
  
  //___________________set error msg if failed to fetch
  .catch((err)=> {
    console.log(
      'src/compontnts/BubblePage.js: BubblePage: axiosWithAuth: .catch ERROR: ',
      err
    )
  })
  }, []);
  
  

  return ( //____________________insert div name and closing tag
    <> 
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
