import React from 'react'

export default function StepRoadmap({counter}) {
  return (
    <div>
        <div className='roadmap_text'>
            <div className='counter'>{counter}</div>
        </div>
        <div className='roadmap_img'>
          <img src={`/images/roadmap${counter}.png`} alt="roadmap description" />
        </div>
    </div>
  )
}
