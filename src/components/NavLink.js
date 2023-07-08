import React from 'react'

export default function NavLink({index, label, changeSection}) {
  return (
    <span id={index} className="heading-link" onClick={changeSection}>{label}</span>
  )
}