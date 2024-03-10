import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { useLocation } from 'react-router-dom';
import NoParts from "../assets/Component 1.png";
import "../styles/Home.css";
import CustomPage from './CustomPage';

function Home() {
  const location = useLocation();
  const { updatedFunctions } = location.state || {};
    const [deviceConnected, setDeviceConnected] = useState(false);

    const handleTestDeviceConnect = () => {
        setDeviceConnected(true);
    };


  return (
    <div>
      <div className='headerContainer'>
        <div className='welcomeHeader'>
          <h2>Welcome to K E E +</h2>
        </div>
        <div className='changingImage'>
          <img className="photos" src={NoParts} alt="No Parts" />
          <div className='hiddenphotos'></div>
        </div>  
        {updatedFunctions &&(
          <div className="selectedFunctions functionGrid">
{/* First row */}
<div className="firstRow">
  {updatedFunctions.slice(0, 2).map((func, index) => (
    <div key={index} className="functionItem">
      {`Function ${index + 1}: `}
      {func ? ( // Check if func is not empty
        <span className="functionName">{func}</span> // Render func if not empty
      ) : (
        <span className="functionName">None</span> // Render "None" if func is empty
      )}
    </div>
  ))}
</div>

{/* Second row */}
<div className="secondRow">
  {updatedFunctions.slice(2).map((func, index) => (
    <div key={index} className="functionItem">
      {`Function ${index + 3}: `}
      {func ? ( // Check if func is not empty
        <span className="functionName">{func}</span> // Render func if not empty
      ) : (
        <span className="functionName">None</span> // Render "None" if func is empty
      )}
    </div>
  ))}
</div>

</div>

)}
            <div className='mainButton'>
            <Link to="/CustomPage">
            <button>Customise Device</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
