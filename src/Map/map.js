import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import { MAP_HEIGHT, MAP_WIDTH } from '../store/constants.js'
import { store } from '../store/'

function getTileObject(type){
  switch(type){
  case 0:
    return 'space'

  case 1:
    return 'wall'

  case 2:
    return 'food'

  case 5:
    return 'ghost'
  }
}


export function MapFood(props) {
  return <div className={ `tile ${getTileObject(props.value)}` }
              style={{
                height: '70px',
                width: '70px'
              }}
  > {props.value} </div>
}

export function MapRow(props) {
  return (
      <div>
      {
        props.foods.map((food) => <MapFood value={food} />)
      }
      </div>
  )
}

export default function Map(props) {
  return(
    <div>
      <Paper style={{
        position: 'relative',
        height: '700px',
        width: '700px',
        backgroundColor: 'black',
        margin: '10px auto',
      }}>
        {
          props.foods.map( row => <MapRow foods={row} /> )
        }
      </Paper>
    </div>
  )
}
