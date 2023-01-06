import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Result from './Result'
import axios from 'axios';
import Loading from './Loading';
import Error from './Error';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [resultData, setResultData] = useState(null);
  const [error, setError] = useState(null);
  const [address, setAddress] = useState('');
  const search = () => {
    setIsLoading(true);
    setResultData(null);
    setError(null);
    axios.get(`https://ipapi.co/${address}/json/`).then((res) => {
      setIsLoading(false)
      const result = res.data;
      if(result.error !== undefined) {
        setError(result.reason);
        return;
      }

      setResultData(result);
    }).catch((err) => {
      setError('Unknown error');
      console.log(err)
    })

  }

  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <ul className="title">
            <li><img src={reactLogo}></img></li>
            <li><h1>react-geoip-lookup</h1><input type="text" placeholder='IP Address' onInput={(e) => {setAddress(e.target.value)}}></input><p className='small__text'>By default null value is your ip address.</p><button onClick={search}>Search</button></li>
          </ul>
          {isLoading && <Loading/>}
          {error && <Error text={error}/>}
          {resultData && <Result data={resultData}></Result>}
        </div>
      </div>
    </div>
  )
}

export default App
