import React from 'react'

type ButtonType = { 
  children: React.ReactElement[] | React.ReactElement,
  padding:[number, number?, number?, number?],
  action: (name:string | number)=>string |number 
}

function Button({children, padding, action}:ButtonType) {
  
  return (
    <button
    onClick={()=>action(5)} 
    style={{padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`}}>{children}</button>
  )
}

export default Button