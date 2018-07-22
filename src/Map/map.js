import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'

export default function Map(props) {
  return(
    <div>
      <Paper style={{
        position: 'relative',
        border: '10px dashed red',
        height: '600px',
        width: '1000px',
        backgroundColor: 'black',
        margin: '15px auto',
      }}>
      </Paper>
    </div>
  )
}
