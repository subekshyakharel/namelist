
import { useState } from 'react';
import './App.css';
import { Display } from './components/Display';
import { Form } from './components/Form';
import { List } from './components/List';

function App() {
  // const [name, setName ] = useState("")
  const [list, setList] = useState([])

  const addUsers = name =>{
    setList([...list, name])
  }

  // const handleOnChange = (e) => {
    
  //   const {value} = e.target;
  //   setName(value)
  // }

  // const handleONSubmit = (e) =>{
  //   e.preventDefault();
  //   setList([...list, name]);
  // }
  

 



  

  return (
    <div className='wrapper'
      style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center", fontSize: "2rem" }}>
      <div className='userList' style={{ boxShadow: "0 0 10px grey", padding: "2rem" }}>
        
        <Form addUsers = {addUsers}/>
        
        <hr />

        <List list = {list}/>
      </div>
    </div>
  );
}

export default App;
