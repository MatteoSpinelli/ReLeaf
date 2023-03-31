import React from 'react'
import useTranslate from '../../hooks/useTranslate'
import useTheme from '../../hooks/useTheme'
import "./Roadmap.scss"

export function StepRoadmap({ counter, ImgStep }) {
  const t = useTranslate("homepage")
  const { isDark } = useTheme()
  return (
    <div className={`roadmap_step md:flex ${counter !== 2 ? "flex-row-reverse": ""} justify-between text-secondaryTxt`}>
      <div className='roadmap_img md:flex-grow md:w-8/12'>
        <ImgStep />
      </div>
      <div className='roadmap_text'>
        <div className='r_counter font-bold' style={{backgroundColor: isDark && "#1D272D"}}>
          {counter}
        </div>
        <div className='r_title text-3xl font-bold'>
          {t[`roadmap_step${counter}_title`]}
        </div>
        <div className='r_description text-lg'>
          {t[`roadmap_step${counter}_description`]}
        </div>
      </div>
    </div>
  )
}
