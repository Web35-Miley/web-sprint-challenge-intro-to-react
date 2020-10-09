import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import { Character } from './components/Character';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
    .then(res => {
      setData(res.data.results)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  console.log(data)

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div className='container'>
        <div>
        {data.map(item => {
          return <Character key={item.id} data={item} />
        })}
      </div>
      </div>
    </div>
  );
}

export default App;
