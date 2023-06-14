import React, { useState } from 'react'
import styled from 'styled-components'
import SectionRender from './SectionRender'


const Container=styled.div`
height: 100vh;
width: 100vh;

margin-top: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-left: 25%;
margin-right: 25%;
`
const SectionContainer=styled.div`
width: 100%;
height: 70vh;

padding: 10px;
margin-top: -10px;
`
const Title=styled.div`

width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 10px;
margin-top: -22px;
height: 60px;
font-size: 32px;
font-family: "Helvetica Neue", Arial, sans-serif;
`
const Button=styled.button`
background-color: #8A4893;
color: white;
border: none;
cursor: pointer;
border-radius: 6px;
margin-top: 35px;
padding: 15px;
width: 330px;
font-weight: bold;
font-size:16px;
&:hover{
    color:#8A4893;
    background-color: white;
    border:2px solid #8A4893;
    margin-top: 31px;
}
`

const ResumeBuilder = () => {
        
        const [sections,setSections]=useState(
        [
            {name:'Profile Summery',desc:"Summary of information and personal details related to the user that are relevant in profile section.",isEditable:true,isToggled:true},
            {name:'Academic and Cocurricular Achievements',desc:"Highlights academic and extracurricular achievements, showcasing accomplishments and involvement outside of core education.",isEditable:true,isToggled:true},
            {name:'Work Experience',desc:"Highlights professional roles, responsibilities, and achievements to showcase relevant skills and expertise.",isEditable:true,isToggled:true},
            {name:'Projects',desc:"Highlighting my diverse range of completed projects, showcasing my skills, problem-solving abilities, and project management expertise.",isEditable:true,isToggled:true},
            {name:'Certifications',desc:"Showcase your professional achievements and specialized knowledge through relevant certifications obtained in your field.",isEditable:true,isToggled:true},
            {name:'Leadership Positions',desc:"Highlighting leadership roles held, showcasing management, decision-making, and team-building skills demonstrated in previous positions",isEditable:true,isToggled:true},
            {name:'Extracurricular',desc:" Highlighted involvement in clubs, organizations, and community service, demonstrating leadership, teamwork, and personal development skills.",isEditable:true,isToggled:true},
            {name:'Education',desc:"List academic degrees, institutions, and dates attended, highlighting relevant coursework, achievements, and academic honors.",isEditable:true,isToggled:true}
        ]
    )

  

  return (
    
    <Container>
        <Title>
            Select your sections
        </Title>
        
        
    <SectionContainer>
        {
            sections.map(section=>
               (
                
                    
               <SectionRender key={section.name} props={section}   ></SectionRender >
                   
               
               )
            )
        }
    </SectionContainer>
        
    
    <Button>Save and Next</Button>
    
    </Container>
    
  )
}

export default ResumeBuilder