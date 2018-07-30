import React, { Component } from 'react'
import axios from 'axios'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'

class PlayerName extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pname: ''
    }
  }

  handleChange = (e) => {
    const { value } = e.target
    this.setState({
        pname: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.saveToDatabase(this.state.pname)
  }

  saveToDatabase = (name) => {
    let requestOptions = {
      method: 'POST',
      ContentType: 'Application/json'
    }
    axios.post('http://localhost:5000/player', requestOptions).then( response => {
      return response
    })
  }

  render() {
    const playerName = this.state.pname
    const score = this.props.score.score
    return(
      <Paper>
        <h1>Please enter your name</h1>
        <input name="pname" type="text" value={playerName} onChange={this.handleChange}/>
        <Button onClick={this.handleSubmit}> Submit Name </Button>
        Total Score: {score}
      </Paper>
    )
  }
}

const mapStateToProps = (state) => {
  debugger
  const { score, player } = state
  return { score, player }
}

export default connect(mapStateToProps)(PlayerName)
