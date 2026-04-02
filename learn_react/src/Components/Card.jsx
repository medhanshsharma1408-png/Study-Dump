import React from 'react'

const Card = (props) => {
  return (
    <div className='Card'>
        <img src={props.img}/>
        <h1>{props.user}</h1>
        <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, minima.</h3>
    </div>
  )
}

export default Card