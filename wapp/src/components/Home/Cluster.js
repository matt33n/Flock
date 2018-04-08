import React from 'react'
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { HistoryLink } from '../History';

var buttonStyle = {
  marginTop: "-10px",
  width: "240px",
  backgroundColor: "#2dd6ed"
}

var divStyle = {
	backgroundColor: "#2dd6ed",
	width: "330px",
	height:"70px",
	borderRadius:"5px",
}

var nodesValueStyle = {
	
	fontSize: "70px",
	position: "relative",
	top: "50%",
	transform: "translateY(-50%)",
}

var h1style = {
	fontWeight: "100"
}

var divStyle3 = {
	paddingTop: "70px",
}

var inDaysStyle = {
	fontWeight: "100",
}

const ClusterIsland = (props) => (
	<div>
	  	<h1 style = {h1style}>MY FLOCK</h1>
	  	<div style = {divStyle}><h1 style = {nodesValueStyle}>{props.nodes} people</h1></div>
	  	<div style = {divStyle3}>
	    <h3>{props.nodeschange} people <span style = {inDaysStyle}>in {props.nodestimeframe}</span></h3>
	    <br/>
	    </div>
	    <div id = "butts">
			<div className = "ui center aligned grid">
				<div className = "twelve wide column">
			    	<button className="ui blue button" style = {buttonStyle}>View Flock Details</button>
			    </div>
			    <div className = " twelve wide column">
			    	<HistoryLink />
			    </div>
			</div>
		</div>
    </div>
  

)

export default ClusterIsland
