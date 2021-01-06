import React from "react"

function Blurb(props) {
  return (
    <span style={{textAlign:'center'}} className="info">{props.content}</span>
  )
}
export default Blurb