import React, { useState } from 'react'
import "./Modal.css"
const Modal = ({handlemodal}) => {
  const[formdata,setformdata]=useState("")

  const handlechange=(e)=>{
    setformdata(e.target.value)
  }

  const modaloff=(event)=>{
    event.preventDefault();
    handlemodal(formdata)
  }
  return (
   <div className="modal-container">
    <div className="modal">
      <form>
        <input className="modal-input" type="text"  onChange={handlechange}/>
      </form>
      <button className='modal-button' type='submit' onClick={modaloff}>Save</button>
    </div>
   </div>
  )
}

export default Modal