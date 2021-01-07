import React,{useState} from 'react'

export default function RandomPic({pics}) {
  let [currentPic, setCurrentPic] = useState(pics[Math.floor(Math.random() * pics.length)])

  let changePic = () => {
    let newPic = pics[Math.floor(Math.random() * pics.length)]
    if (newPic === currentPic) changePic()
    else setCurrentPic(newPic)
  }

  return (
    <img id='random-pic' src={currentPic} alt='pic' onClick={changePic} />
  )
}