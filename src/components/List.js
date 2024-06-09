import React from 'react'

export const List = ({list}) => {
  return (
    <div className="List">
          <ul>
            {
              list.map((item, i)=>{
                return <li key={i}>{item}</li>
              })
            }
          </ul>
        </div>
  )
}
