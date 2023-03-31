import React from 'react'
import useTranslate from '../../hooks/useTranslate'
import "./Roadmap.scss"

export function StepRoadmap({ counter, ImgStep }) {
  const t = useTranslate("homepage")
  return (
    <div className={`roadmap_step md:flex ${counter !== 2 ? "flex-row-reverse": ""} justify-between`}>
      <div className='roadmap_img md:flex-grow md:w-8/12'>
        <ImgStep />
      </div>
      <div className='roadmap_text'>
        <div className='r_counter font-bold'>
          {counter}
        </div>
        <div className='r_title text-4xl font-bold'>
          {t[`roadmap_step${counter}_title`]}
        </div>
        <div className='r_description text-2xl'>
          {t[`roadmap_step${counter}_description`]}
        </div>
      </div>
    </div>
  )
}
