import React from "react"
import "./index.css"

function Subtitle(props) {
  return (
    <span className="info">
      <a href={props.link1.url} target="_blank">
        <img src={props.link1.img} width='30' height='30' 
        className={props.link1.class}></img>
      </a>
      <a href={props.link2.url} target="_blank">
        <img src={props.link2.img} width='30' height='30' 
        className={props.link2.class}></img>
      </a>
      <a href={props.link3.url} target="_blank">
        <img src={props.link3.img} width='30' height='30' 
        className={props.link3.class}></img>
      </a>
    </span>
  )
}
export default Subtitle 