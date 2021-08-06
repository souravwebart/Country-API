import './index.css';
import {useState, useEffect} from 'react';
import data from './data';

function Home() {
  
  const [countries, setCountries] = useState([]);

  const [visible, setVisible] = useState(8)
  const showMore = () => {
      setVisible(prevValue => prevValue + 4);
  };

  const fetchData = async () => {
    try {
      const response =  await fetch(`https://restcountries.eu/rest/v2/region/asia`)
      setCountries(await response.json());
    } catch (error) {
      console.log(error);
    }
  }
 
useEffect(() => {
  fetchData();
}, [])

  return (
<div className="home">
<div className="container-fluid">
<div className="heading">
<h1>COUNTRY<span>API</span></h1>
<hr className='hr'/>
<div className="loadmorebutton">
<button className="loadmorebtn" onClick={showMore}>Refresh</button>
 </div>
</div>
{countries.slice(0, visible).map(data)}
</div>
</div>

  );
}

export default Home;
