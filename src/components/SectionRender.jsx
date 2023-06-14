import React, { useState } from 'react'
import styled  from 'styled-components'
import TableRowsIcon from '@mui/icons-material/TableRows';
import EditIcon from '@mui/icons-material/Edit';
import Modal from './Modal';
import { ToggleOff, ToggleOn } from '@mui/icons-material';
import { DragDropContext } from 'react-beautiful-dnd';

const Secdiv=styled.section`
width: 100%;
height: 10%;
background-color: #3aee3a;
border: 2px solid blue;
margin-top: 10px;
display: flex;
align-items: center;
justify-content: space-between;
`
const Info=styled.div`
display: flex;
align-items: center;
margin-left: 10px;
`

const Control=styled.div``

const Title=styled.p`
margin-left: 10px;
`
const SectionRender = ({props}) => {
   // console.log(props)
   const [modalrender,setmodalrender]=useState(false)
   const [title,setTitle]=useState(props.name)
   const [toggleOn, setToggleOn] = useState(false);

   const handleToggleClick = () => {
     setToggleOn((prevToggle) => !prevToggle);
   };
   const handlemodal=(formdata)=>{
    console.log(formdata.value)
    setTitle(formdata)
    setmodalrender((prev)=>!prev)
   }
  return (
    <>
    <Secdiv>
      <Info>
      <TableRowsIcon/>
      <Title>{title}</Title>
      </Info>
      <Control>
        <EditIcon onClick={() => handlemodal(props.name)} style={{cursor:"pointer"}} />
       {
        toggleOn ? 
        <ToggleOn onClick={handleToggleClick} style={{cursor:"pointer"}} /> 
        :
        <ToggleOff onClick={handleToggleClick} style={{cursor:"pointer"}} />
       }
      </Control>
    </Secdiv>
    {modalrender &&<Modal handlemodal={handlemodal}/>}
    </>
  )
}

export default SectionRender