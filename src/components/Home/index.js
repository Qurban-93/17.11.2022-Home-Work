import React from 'react'
import Header from '../Header';
import Main from '../Main';

function Home() {
    const [inputsValue,setInputsValue] = React.useState({
        email:"",
        fullname:"",
    });

    const [showResult,setShowResult] = React.useState(true);

  return (
    <>
        {showResult ?(<Header inputsValue={inputsValue} setInputsValue = {setInputsValue} setShowResult = {setShowResult} showResult={showResult}/>):
        (<Main inputsValue={inputsValue} setShowResult={setShowResult}/>)}
    </>
  )
}

export default Home