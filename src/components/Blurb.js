import React from "react"

function Blurb(props) {
  return (
    <div style={{
      width:'40%', 
      fontSize:'.9em', 
      paddingTop:'1em'
    }}>
      <div>{props.content}</div>
    </div>
  )
}
export default Blurb