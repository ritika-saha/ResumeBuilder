import React, { useState } from 'react'
import styled from 'styled-components'
import SectionRender from './SectionRender'


const Container=styled.div`
height: 100vh;
width: 100vh;
background-color: red;
margin-top: 0;
`
const SectionContainer=styled.div`
width: 100%;
height: 90vh;
background-color: pink;
padding: 10px;
`
const Title=styled.h1``
const Button=styled.button``

const ResumeBuilder = () => {
        
        const [sections,setSections]=useState(
        [
            {name:'Profile Summery',desc:"Summary of user's information and personal details in profile section.",isEditable:true,isToggled:true},
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