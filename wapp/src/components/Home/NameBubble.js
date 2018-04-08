import React from 'react'

var bubbleStyle = {
  borderRadius: "5px",
  backgroundColor: "white",
  marginTop: "20px",
  marginRight: "20px",
  //display: "inline",
  whiteSpace: "no-wrap",

  //position: "absolute"
}

var dotStyle = {
  height: "40px",
  width: "40px",
  backgroundColor: "#51B3AC",
    borderRadius: "50%",
    //display: "inline-block",
    marginTop: "-15px",
    marginRight: "-20px"
}

var h3style = {
  fontWeight: "100",
  width: "auto"
}

const NameBubble= (props) => (
  //const balance = this.props.balance;
  <div className = "ui center aligned grid" style = {bubbleStyle}>
    <span className = "ui column" style = {dotStyle}>
    </span>
    <div className = "ui twelve wide column">
        <h5 style = {h3style}> {props.username}</h5>
    </div>
  </div>
  
)

export default NameBubble

