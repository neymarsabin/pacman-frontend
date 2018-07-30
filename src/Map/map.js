import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'


function getTileObject(type){
  switch(type){
  case 0:
    return 'food'

  case 1:
    return 'wall'

  case 2:
    return 'gem'

  case 5:
    return 'ghost'
  }
}


export function MapFood(props) {
  return <div className={ `tile ${getTileObject(props.value)}`}
              style={{
                height: '70px',
                width: '70px'
               }}
    >{props.value}</div>
}

export function MapRow(props) {
  return (
      <div className="food-row">
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
        border: '10px dashed red',
        height: '600px',
        width: '1000px',
        backgroundColor: 'black',
        margin: '15px auto',
      }}>
      {
        props.foods.map( row => <MapRow foods={row} /> )
      }
      </Paper>
    </div>
  )
}
