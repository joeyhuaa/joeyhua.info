import React,{useState} from 'react'

export default function Pics({pics}) {
  let [picIndex, setPicIndex] = useState(0)

  let changePic = () => {
    let newIndex = picIndex + 1
    if (newIndex < pics.length) setPicIndex(newIndex)
    else setPicIndex(0)
  }

  return (
    <img id='random-pic' src={pics[picIndex]} alt='pic' onClick={changePic} />
  )
}