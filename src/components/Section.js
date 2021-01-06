import React from 'react'

export default function Section({id, title, subtitle, content}) {
  return (
    <div className='section' id={id}>
      {/* <span className='title'>{title}</span> */}
      {subtitle}
      {content}
    </div>
  )
}