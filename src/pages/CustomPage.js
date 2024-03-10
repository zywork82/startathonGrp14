import React, { useState } from 'react';
import Select from 'react-select';
import { Link } from "react-router-dom";
import '../styles/CustomPage.css';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Button1 from "../assets/btn_1.png";
import Button2 from "../assets/btn_2.png";
import Button3 from "../assets/btn_3.png";
import Button4 from "../assets/btn_1.png";
import Button5 from "../assets/btn_4.png";
import { useNavigate } from "react-router-dom";
import { functionMapping } from '../buttonFunctions.js';

function CustomPage() {
    const [currentDeviceIndex, setCurrentDeviceIndex] = useState(0);
    const [selectedProfile, setSelectedProfile] = useState("");
    const [profiles, setProfiles] = useState([""]);
    const [selectedFunctions, setSelectedFunctions] = useState(Array(5).fill("")); // Initialize with empty strings for each device
    const [lastSavedTimestamp, setLastSavedTimestamp] = useState(null);
    const [deviceFunctions, setDeviceFunctions] = useState({
        
        device1: "",
        device2: "",
        device3: "",
        device4: "",
        device5: ""
    });
    const [profile, setProfile] = useState([""]);
    
    const profileDeviceFunctions = {
        profile_excel: ["Copy", "Paste", "Cut", "Enter", "Up-Down-Left-Right"],
        profile_word: ["Copy", "Paste", "Strikethrough", "Highlight", "Insert Image"],
        profile_callcentre: ["Call", "Prev/Next", "Free Scroll", "Hang Up", "Up-Down-Left-Right"],
        profile_cashier: ["BILL", "Prev/Next", "Scroll UP/DOWN", "TOTAL", "Up-Down-Left-Right"],
        // Add other profiles and their respective preset functions here
    };

    const handleProfileChange = (event) => {
        const { value } = event.target;
        setSelectedProfile(value);

        // Set the preset functions for each device based on the selected profile
        const presetFunctions = profileDeviceFunctions[value];
        setSelectedFunctions(presetFunctions || Array(5).fill("")); // If no preset functions defined, set to empty strings
    };

    const handleFunctionChange = (event) => {
        const { value } = event.target;
        setSelectedFunctions(prevFunctions => {
            const newFunctions = [...prevFunctions];
            newFunctions[currentDeviceIndex] = value; // Set selected function for the current device
            return newFunctions;
        });
        console.log("Function Changed from:", selectedFunctions[currentDeviceIndex], "to", value);
    };

    const toggleDevice = (index) => {
        setCurrentDeviceIndex(index);
    };

    const navigate = useNavigate()

    const handleSaveFunction = () => {
        console.log("Functions for each device:", selectedFunctions);
        // Perform any saving operations here
        
        const currentDate = new Date();
        const currentTime = currentDate.toLocaleString();
        setLastSavedTimestamp(currentTime);
        navigate("/", { state: { updatedFunctions: selectedFunctions } });
  };

    const handleReset = () => {
        setSelectedProfile("");
        setSelectedFunctions(Array(5).fill(""));
        setLastSavedTimestamp(null);
    };

    const devices = [
        { deviceNumber: 1, image: Button1 },
        { deviceNumber: 2, image: Button2 },
        { deviceNumber: 3, image: Button3 },
        { deviceNumber: 4, image: Button4 },
        { deviceNumber: 5, image: Button5 }
    ];

    function togglePrevious() {
        setCurrentDeviceIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    }

    function toggleNext() {
        setCurrentDeviceIndex(prevIndex => (prevIndex < devices.length - 1 ? prevIndex + 1 : prevIndex));
    }

    const currentDevice = devices[currentDeviceIndex];

    return (
        <div className='editingContainer'>
            <div className='deviceHeader'>
                <h2>K E E  {currentDevice.deviceNumber}</h2>
                <div className='selectProfile'>
                    <div className='ProfileButton'>
                        Profile
                        <select className='profileSelections' value={selectedProfile} onChange={handleProfileChange}>
                            <option className='profileSelections' value="">Select Profile</option>
                            <option className='profileSelections' value="profile_excel">Excel</option>
                            <option className='profileSelections' value="profile_word">Word</option>
                            <option className='profileSelections' value="profile_callcentre">Call Centre</option>
                            <option className='profileSelections' value="profile_cashier">Cashier</option>
                        </select>
                    </div>
                </div>
            </div>
            <table className='switchDevices'>
                <tbody className="tableBody">
                    <tr>
                        <td>
                            <button className='controlButton controlButtonLeft' onClick={togglePrevious} disabled={currentDeviceIndex === 0}><ArrowLeftIcon /></button>
                        </td>
                        <td>
                            <div className='compilePartsImages'>
                                {devices.map((device, index) => (
                                    <img key={index} className="partImages" src={currentDeviceIndex === index ? device.image : null} onClick={() => toggleDevice(index)} />
                                ))}
                            </div>
                        </td>
                        <td>
                            <button className="controlButton controlButtonRight" onClick={toggleNext} disabled={currentDeviceIndex === 4}><ArrowRightIcon /></button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className='functionButtons'>
                <button className='functionButton'>Function:
                    <select className='functiondesign' value={selectedFunctions[currentDeviceIndex]} onChange={handleFunctionChange}>
                        <option value="">Select Function</option>
                        {selectedProfile && profileDeviceFunctions[selectedProfile].map((func, index) => (
                            <option key={index} value={func}>
                                {func}
                            </option>
                        ))}
                        <option value="space">Space</option>
<option value="Enter">Enter</option>
<option value="Backspace">Backspace</option>
<option value="Copy">Copy</option>
<option value="Paste">Paste</option>
<option value="Pageup">Page Up</option>
<option value="Pagedown">Page Down</option>
<option value="Tab">Tab</option>
<option value="ArrowUp">Arrow Up</option>
<option value="ArrowDown">Arrow Down</option>
<option value="ArrowLeft">Arrow Left</option>
<option value="ArrowRight">Arrow Right</option>
<option value="Escape">Escape</option>
<option value="Home">Home</option>
<option value="End">End</option>
<option value="Insert">Insert</option>
<option value="Delete">Delete</option>
<option value="Shift">Shift</option>
<option value="Ctrl">Ctrl</option>
<option value="Alt">Alt</option>
<option value="Cmd">Cmd</option>
<option value="Z">Undo</option>
<option value="Y">Redo</option>

                    </select>
                </button>
            </div>
            <div className='bottom_options'>
                <div className='endButtons'>
                <button className='finalButton' onClick={handleSaveFunction}>Save</button>
                <button className='finalButton' onClick={handleReset}>Reset</button>
                </div>
            </div>
            <div className='timeStampContainer'>{lastSavedTimestamp && <p className='timeStamp'>Last saved: {lastSavedTimestamp.toLocaleString()}</p>}</div>
        </div>
    );
}

export default CustomPage;
