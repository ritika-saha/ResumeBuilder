import React, { useState } from 'react'
import styled  from 'styled-components'
import TableRowsIcon from '@mui/icons-material/TableRows';
import EditIcon from '@mui/icons-material/Edit';
import Modal from './Modal';
import { InfoOutlined, ToggleOff, ToggleOn } from '@mui/icons-material';
import InfoModal from './InfoModal';


const Secdiv=styled.section`
width: 100%;
height: 10%;
margin-top: 10px;
display: flex;
align-items: center;
justify-content: space-between;
cursor: move;

`
const Info=styled.div`
display: flex;
align-items: center;
margin-left: 10px;
`

const Control=styled.div`
display: flex;
align-items: center;
`

const Title=styled.p`
margin-left: 10px;
`

const InfoIcon=styled.div`
width: 20px;
cursor: pointer;
`
const Line=styled.div`
width: 100%;
height: 0px;
border: 1px solid #E6E6E6;
 
`

const SectionRender = ({props}) => {
   // console.log(props)
   const [modalrender,setmodalrender]=useState(false)
   const [title,setTitle]=useState(props.name)
   const [toggleOn, setToggleOn] = useState(true);
   const [infoShow,setInfoShow]=useState(false)

   const handleToggleClick = () => {
     setToggleOn((prevToggle) => !prevToggle);
   };
   const handlemodal=(formdata)=>{
    console.log(formdata.value)
    setTitle(formdata)
    setmodalrender((prev)=>!prev)
   }

   const renderInfo=(event)=>{
    //event.preventDefault()
    setInfoShow((prev)=>!prev)

   }
  return (
    <>
    <Secdiv draggable>
      <Info>
      <TableRowsIcon/>
      <InfoIcon onMouseEnter={renderInfo} onMouseLeave={renderInfo} styles={{cursor:"pointer"}}>
      <InfoOutlined />
      {
       infoShow &&
        <InfoModal props={props} />

      }
      </InfoIcon>
      <Title>{title}</Title>
      </Info>
      <Control>
        <EditIcon onClick={() => handlemodal(props.name)} style={{cursor:"pointer"}} />
       {
        toggleOn ? 
        <ToggleOn onClick={handleToggleClick} style={{cursor:"pointer", width:"40px",height:"40px",color:"#8A4893",marginLeft:"15px"}} /> 
        :
        <ToggleOff onClick={handleToggleClick} style={{cursor:"pointer", width:"40px",height:"40px",marginLeft:"15px"}} />
       }
      </Control>
    </Secdiv>
    <Line></Line>
    {modalrender &&<Modal handlemodal={handlemodal}/>}
    </>
  )
}

export default SectionRender