
import './App.css';
import React, {useState, useEffect} from 'react'
function App() {
const [message, setMessage] = useState('hello there')
function getUrl(path){
    if(process.env.NODE_ENV === "development")
      return 'http://localhost:5000' + path
    else
      return path
}
useEffect(() => {
  fetch(getUrl('/api/hello'))
  .then(res => res.json())
  .then(resBody => setMessage(resBody.message))
  .catch((err) => {
    debugger;
  })
},[])
  return (
    <div className="App">
      <header className="App-header">
       <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
