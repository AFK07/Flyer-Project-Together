import React, { useState } from 'react';
import './flyer.css';
import logo from './photo/mainlogo.png';
import mensHealth from './photo/mhd.jpg';
import outreach from './photo/1.png';
import silentStorms from './photo/sslogo.jpg';
import peerSupport from './photo/mpsg.png';
import gnrc from './photo/GRNC.jpg';
import info1 from './photo/en.png';
import info2 from './photo/np.png';
import aec from './photo/aec.jpg';
import qr from './photo/qr.png';

function Flyer() {
  // Flip states for each image
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [buttonText, setButtonText] = useState("नेपाली"); // Default button text for Info flip

  // Toggle function for Peer Support Image
  const togglePeerSupportImage = () => {
    setIsFlipped1((prev) => !prev);
  };

  // Toggle function for Info Image (with text change)
  const toggleInfoImage = () => {
    setIsFlipped2((prev) => !prev);
    setButtonText((prevText) => (prevText === "नेपाली" ? "English" : "नेपाली"));
  };

  return (
    <div className="flyer-container">
      {/* First Row - Logos and Text in Three Columns */}
      <div className="flyer-top-section">
        {/* Column 1 - Logos */}
        <div className="flyer-top-logos">
          <div className="logo-container">
            <img src={logo} alt="Project Together Logo" className="flyer-logo" />
          </div>
          <div className="sslogo-container">
            <img src={silentStorms} alt="Silent Storms Logo" className="top-image" />
          </div>
        </div>

        {/* Column 2 - Text */}
        <div className="flyer-top-text">
          <p>
            +18 identify as a male? <br />
            Weathering Life's Storms? <br />
            Want to be Heard? <br />
            Feel Alone? <br /><br />
            Looking for..... <br />
            Safe, Non-judgemental space. <br />
            All Male Environment. <br />
            Peer-to-Peer Support.
          </p>
        </div>

        {/* Column 3 - GRNC Logo */}
        <div className="flyer-top-grnc">
          <img src={gnrc} alt="Greater Rushmoor Nepali Community" className="top-image" />
        </div>
      </div>

      {/* Second Row - MHD Image */}
      <div className="flyer-middle-section">
        <div className="flyer-row">
          <img src={mensHealth} alt="Men's Health Day" className="row-image" />
        </div>
      </div>

      {/* Third Row - Buttoned Images with Flip Animation */}
      <div className="flyer-bottom-section">
        <div className="flyer-grid pc-layout">
          
          {/* First Image Flip - Peer Support */}
          <div className="flyer-card">
            <div className="flip-container">
              <div className={`flipper ${isFlipped1 ? 'flipped' : ''}`}>
                <div className="front image-container">
                  <img src={outreach} alt="Outreach Front" />
                </div>
                <div className="back image-container">
                  <img src={peerSupport} alt="Peer Support Back" />
                </div>
              </div>
            </div>
            <button className="toggle-button" onClick={togglePeerSupportImage}>
              Click Here for More Information
            </button>
          </div>

          {/* Second Image Flip - Info Image */}
          <div className="flyer-card">
            <div className="flip-container">
              <div className={`flipper ${isFlipped2 ? 'flipped' : ''}`}>
                <div className="front image-container">
                  <img src={info1} alt="Info 1 Front" />
                </div>
                <div className="back image-container">
                  <img src={info2} alt="Info 2 Back" />
                </div>
              </div>
            </div>
            <button className="toggle-button" onClick={toggleInfoImage}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>

{/* Fourth Row - Event Information & QR Code */}
<div className="flyer-row4">
  {/* Left Side - AEC Image */}
  <div className="flyer-left">
    <img src={aec} alt="AEC Image" className="aec-image" />
  </div>

  {/* Middle - QR Code */}
  <div className="qr-container">
    <a href="https://linktr.ee/silentstorms?utm_source=qr_code" target="_blank" rel="noopener noreferrer">
      <img src={qr} alt="QR Code" className="qr-code" />
    </a>
  </div>

  {/* Right Side - Event Information */}
  <div className="flyer-info">
    <h2>📍 <span className="event-title">Event Location</span></h2>
    
    {/* 🔹 Clickable Address Opens in Google Maps */}
    <p>
      <strong>
        <a href="https://www.google.co.uk/maps/place/14-40+Victoria+Rd,+Aldershot+GU11+1TH/@51.2484985,-0.7596118,431m/data=!3m1!1e3!4m6!3m5!1s0x48742cb1b1e14b7d:0x8b1d554a2fdf368c!8m2!3d51.2481422!4d-0.7577074!16s%2Fg%2F11cskns2q2?entry=ttu&g_ep=EgoyMDI1MDIwOS4wIKXMDSoASAFQAw%3D%3D" 
           target="_blank" 
           rel="noopener noreferrer"
           className="event-address">
          14-40 Victoria Rd, Aldershot GU11 1TH
        </a>
      </strong>
    </p>

    <p>📅 Every Monday (including bank holidays)</p>
    <p>🕛 1900 - 2100</p>
    <p>📧 Contact: <a href="mailto:info@projecttogether.org.uk">info@projecttogether.org.uk</a></p>
  </div>
</div>




    </div>
  );
}

export default Flyer;
