import React, { useState } from 'react'
import { Display } from './Display'

export const Form = ({addUsers}) => {
    const [name, setName] = useState("")
    // const [list, setList] = useState([])

    const handleOnChange = (e) => {
    
        const {value} = e.target;
        setName(value)
      }

      const handleONSubmit = (e) =>{
        e.preventDefault()
        addUsers(name)
        
      }
      
  return (
    <div className="form">
        <Display name = {name}/>
          <form action="" onSubmit={handleONSubmit}>
            <input type="text"
              onChange={handleOnChange} />
            <button>Add user</button>
          </form>
        </div>
  )
}
