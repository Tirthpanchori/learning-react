import React from 'react'

function Card({name, age = 21}) {
    
  return (
   <div className="w-60 h-60 rounded-xl">
        <img
          src="https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g"
          alt="Giphy"
          className="rounded-t-xl"
        />
        <h1>{name}</h1>
        <h1>{age}</h1>
      </div>
  )
}

export default Card