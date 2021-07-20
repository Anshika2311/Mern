import './App.css';
import axios from 'axios';
import React,{useState} from 'react';

function App() {

  // const[backenddata, setbackenddata]=useState([])

  // function getdata(){

  //   // axios.get('/api/helloworld').
  //   axios.get('/api/getnames').
  //   then(res=>{
  //     console.log(res)
  //     setbackenddata(res.data)
  //   }).catch((err)=>{
  //     console.log(err)
  //   })

  // }

  const[username,setusername]=useState("")
  const[backenddata,setbackenddata]=useState("")

  function senddata(){

    var user = {

      username:username

    }

    axios.post('/api/validateusername',user)
    .then((res)=>{

      console.log(res)
      setbackenddata(res.data)

    }).catch(err=>{

      console.log(err)

    })

  }

  return (
    <div className="App">
      <h1>This is from React JS</h1>

      {/* <button onClick={getdata}>GET DATA FROM NODEJS</button>
      <h1>Backend Data <br/>{backenddata}</h1> */}

      <input type="text" value={username} onChange={(e)=>{setusername(e.target.value)}}/>
      <br/>
      <button onClick={senddata}>SEND DATA TO NODEJS</button>
      <h1>Backend response<br/>{backenddata}</h1>

    </div>
  );
}

export default App;
