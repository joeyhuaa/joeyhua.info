import React from 'react'

export default function Section({id, subtitle, content}) {
  return (
    <div id={id}>
      {subtitle}
      {content}
    </div>
  )
}