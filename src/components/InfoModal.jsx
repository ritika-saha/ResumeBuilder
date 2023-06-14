import React from 'react'
import "./Modal.css"

//const modaloff=(event)=>{
   // event.preventDefault()
   // renderInfo()
  //}

const InfoModal = ({props}) => {
    //const{data,renderInfo}=props
    //console.log(data)
  return (
    <div className="modal-container">
    <div className="modal">
      {props.desc}
      
    </div>
   </div>
  )
}

export default InfoModal