import React from 'react'
import "./index.scss"

function Main({inputsValue , setShowResult}) {
  
  const goBack = () => {
    setShowResult(true)
  }

  return (
    <>
      <button onClick={goBack}>Go Back</button>
      <h1>{inputsValue.fullname}</h1>
      <h1>{inputsValue.email}</h1>
    </>
  )
}

export default Main