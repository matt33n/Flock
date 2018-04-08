import React from 'react'
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import "./index.css"

var buttonStyle = {
  marginTop: "-10px",
  width: "240px",
  backgroundColor: "#33e0a3"
}

var divStyle = {
	backgroundColor: "#33e0a3",
	width: "330px",
	height:"70px",
	borderRadius:"5px",
}

var balanceValueStyle = {
	//paddingTop: "-60px",
	fontSize: "70px",
	//marginTop: "-20px",
	//paddingBottom: "20px",
	//marginBottom: "20px",
	//textAlign: "center",
	//verticalAlign: "middle"
	position: "relative",
	top: "50%",
	transform: "translateY(-50%)"

}

var h1style = {
	fontWeight: "100"
}

var divStyle3 = {
	paddingTop: "70px",

}

var dueInStyle = {
	fontWeight: "100",
}

const BalanceIsland = (props) => (
	<div >
	  	<h1 style = {h1style}>MY BALANCE</h1>
	  	<div style = {divStyle}><h1 style = {balanceValueStyle}>${props.balance}</h1></div>
	    <div style = {divStyle3}>
	    <h3 ><span style = {dueInStyle}>Due in </span>{props.dueindays} days</h3>
			<br/>
		</div>

		<div id="butts">
			<div className = "ui center aligned grid">
				<div className = "twelve wide column">
			    <button className="ui teal button" style = {buttonStyle}>Make Payment</button>
			    </div>
			    <div className = " twelve wide column">
			    <button className="ui teal button" style = {buttonStyle}>Request Grace</button>
			    </div>
			</div>
		</div>
		</div>


)

export default BalanceIsland
