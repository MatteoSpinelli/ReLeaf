import React from 'react'
import "./Roadmap.scss"
import {StepRoadmap} from './StepRoadmap'
import {ReactComponent as Roadmap1} from "../../assets/images/homepage/roadmap1.svg"
import {ReactComponent as Roadmap2} from "../../assets/images/homepage/roadmap2.svg"
import {ReactComponent as Roadmap3} from "../../assets/images/homepage/roadmap3.svg"


export default function Roadmap() {
  return (
    <section className='roadmap md:flex md:flex-col md:items-center'>
        <StepRoadmap counter={1} ImgStep={Roadmap1}/>
        <StepRoadmap counter={2} ImgStep={Roadmap2}/>
        <StepRoadmap counter={3} ImgStep={Roadmap3}/>
    </section>
  )
}
