import React from 'react'
import { Grid, Segment, Card} from 'semantic-ui-react'
import BalanceIsland from "./Balance.js"
import ClusterIsland from "./Cluster.js"
import DelegateIsland from "./Delegate.js"
import ClaimIsland from "./Claim.js"
import "./index.css"

var gridStyle = {
  marginTop: "0",
  paddingTop:"0",
}

const GridExampleStretched = (props) => (
  //const balance = this.props.balance;
  <div id ="cards" style = {gridStyle}>
  <Grid columns={3} >
    <Grid.Row stretched>
      <Grid.Column>
        <Segment><BalanceIsland balance={props.balance} dueindays = {props.dueindays}/></Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment><ClusterIsland nodes={props.nodes} nodeschange = {props.nodeschange} nodestimeframe={props.nodestimeframe} /></Segment>
      </Grid.Column>
      <Grid.Column>
      <Segment><DelegateIsland delegate={props.delegate} nextElection = {props.nextElection} /></Segment>
        <Segment><ClaimIsland/></Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </div>
)

export default GridExampleStretched
