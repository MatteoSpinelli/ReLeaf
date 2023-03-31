import React from 'react'
import "./Roadmap.scss"
import StepRoadmap from './StepRoadmap'

export default function Roadmap() {
  return (
    <section className='roadmap md:flex md:flex-col md:items-center'>
        <StepRoadmap counter={1} />
        <StepRoadmap counter={2} />
        <StepRoadmap counter={3} />
    </section>
  )
}
