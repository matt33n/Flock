import React, {Component} from 'react';
import * as routes from '../../constants/routes';
import { Link } from 'react-router-dom';
import background from "../../assets/images/background.png"
import { Card } from 'semantic-ui-react'
import Table from "./Table.js"
import TableExampleSingleLine from "./semanticTable"
import logo from  "../../assets/images/drivelogo.png"

var buttonStyle = {
  marginTop: "-10px",
  width: "240px",
  backgroundColor: "#2dd6ed"
}

var backgroundStyle = {
  width: "100%" ,
  height: "900px",
  backgroundImage: `url(${background})`,
  margin: "0px",
};


var logoStyle = {
  height:"50px",
}

var divStyle3 = {
	backgroundColor: "white",
	borderRadius: "10px"
}

var divStyle = {
	backgroundColor: "#2dd6ed",
	//width: "300px",
	height:"50px",
	borderRadius:"5px",
	float: "right",
	position: "inline",
	margin: "10px",
	marginLeft: "190px",
	padding: "10px"
}

var balanceValueStyle = {
	//paddingTop: "-60px",
	fontSize: "40px",
	//marginTop: "-20px",
	//paddingBottom: "20px",
	//marginBottom: "20px",
	//textAlign: "center",
	//verticalAlign: "middle"
	position: "relative",
	top: "50%",
	transform: "translateY(-50%)",
	whiteSpace: "nowrap"

}

class HistoryPage extends Component{

	constructor(props) {
		super(props);
		this.state = {
			
			tableData:{
				Transaction: [
					{
						ID: "test"
					},
				],
   				
			}
		}
	}

	render() {
		
		const transactions = this.state.tableData.Transaction;
		console.log("What");
		console.log(this.state.tableData.Transaction.ID);
		return (
			<div style = {backgroundStyle}>
			<br/>
			<br/>
			<br/>
				<div className="ui middle aligned center aligned page grid">
					<div className = "column">
						<div className = "ui middle aligned centered">
							<div style = {divStyle3}>
								<div className = "ui grid">
									<div className = "four wide column">
	                				<img src = {logo} style = {logoStyle}/>
	              					</div>
									<div className = "right floated eight wide column" style = {divStyle}>
									<h3 style = {balanceValueStyle}> recent transactions </h3>
									</div>
								</div>

								<TableExampleSingleLine/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const HistoryLink = () =>
  <button className="ui blue button" style = {buttonStyle}>
    <Link style={{display: 'block', height: '100%', color:'white'}} to={routes.HISTORY}>View History</Link>
  </button>

export default HistoryPage;

export {
  HistoryLink,
};


