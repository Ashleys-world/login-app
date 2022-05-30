import React, { useState } from 'react'
import Login from './Login'
import Registration from './Registration'

export default function Main() {

  const [isdisplay, setDisplay] = useState(true)

  function handleChange(){
      setDisplay(prevDisplay => !prevDisplay) 
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2">
            <div className="row">
                <div className="col-lg-8 offset-lg-2  col-md-8 offset-md-2 mt-5">
                  <div className="" aria-label="Basic example">
                    <label className=" pr-2 ml-0">{isdisplay ? "Already have an account ? " : "New User ? "}</label>
                    <button type="button" onClick={handleChange} className="btn btn-success ml-5">{isdisplay ? "Login" : "Register"}</button>
                  </div>   
                </div>
            </div>
        </div>
           {isdisplay ? <Registration/> : <Login/>}
        </div>
    </div>
  )
}
