import React from 'react'
import "./index.scss"

function Header({ inputsValue , setInputsValue , setShowResult ,showResult}){
  const handleChangeInputValue = (e)=>{
    const{name , value} = e.target;
    setInputsValue({...inputsValue,[name]:value})
  }


  const handleClickedButton = () =>{
    if(inputsValue.fullname.trim().length && inputsValue.email.trim().length){
      setShowResult(false)
    }else{
      alert("Boş qoyma qaqaaaaaaaşşş !!")
    }
  }

  return (
    <>
      <h1>Inputs</h1>
      <input
      defaultValue={inputsValue.fullname}
      onChange={handleChangeInputValue}
       name='fullname' 
      type="text" 
      placeholder='Enter name'/>


      <input 
      onChange={handleChangeInputValue}
      name='email'
       type="email" 
       placeholder='Enter email'
       defaultValue={inputsValue.email}
       />
      <button onClick={handleClickedButton}>Enter</button>
    </>
    
  )
}

export default Header