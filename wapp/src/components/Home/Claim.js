import React from 'react'
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

var buttonStyle = {
  marginTop: "-10px",
  width: "240px",
  backgroundColor: "#2dd6ed"
}

var h1style = {
	fontWeight: "100"
}

var coveredStyle = {
	color: "#2dd6ed"
}

const ClaimIsland = (props) => (

  <div>
  	<h1 style = {h1style} >SUBMIT CLAIM</h1>
    <h3>Make sure it's <span style = {coveredStyle}>covered</span>!</h3>
	<div id="buttsss">

	  	<div className = "ui center aligned grid">
			<div className = "twelve wide column">
		    	<button className="ui blue button" style = {buttonStyle}>File Claim</button>
		    </div>
		    <div className = " twelve wide column">
		    	<button className="ui blue button" style = {buttonStyle}>Review Status</button>
		    </div>
		</div>
	</div>

</div>
)

export default ClaimIsland
