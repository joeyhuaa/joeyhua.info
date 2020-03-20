import React from 'react'

export default function NavLink({index, label, changeSection}) {
  return (
    <span id={index} onClick={changeSection}>{label}</span>
  )
}