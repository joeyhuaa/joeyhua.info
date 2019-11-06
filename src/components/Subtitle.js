import React from "react"

function Subtitle(props) {
  return (
    <span className="info">
      <a href={props.link1.url} target="_blank">{props.link1.text}</a>
      |
      <a href={props.link2.url} target="_blank">{props.link2.text}</a>
      |
      <a href={props.link3.url} target="_blank">{props.link3.text}</a>
    </span>
  )
}
export default Subtitle