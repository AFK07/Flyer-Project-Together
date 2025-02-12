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

function Flyer() {
  const [infoImage, setInfoImage] = useState(info1);
  const [peerSupportImage, setPeerSupportImage] = useState(outreach);

  const toggleInfoImage = () => {
    setInfoImage((prevImage) => (prevImage === info1 ? info2 : info1));
  };

  const togglePeerSupportImage = () => {
    setPeerSupportImage((prevImage) => (prevImage === outreach ? peerSupport : outreach));
  };

  return (
    <div className="flyer-container">
      {/* First Row - Logos and Text in Three Rows */}
      <div className="flyer-top-section">
        {/* Row 1 - Logos */}
        <div className="flyer-top-logos">
          <div className="logo-container">
            <img src={logo} alt="Project Together Logo" className="flyer-logo" />
          </div>
          <div className="sslogo-container">
            <img src={silentStorms} alt="Silent Storms Logo" className="top-image" />
          </div>
        </div>
        {/* Row 2 - Texts */}
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
        {/* Row 3 - GRNC Logo */}
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
      
      {/* Third Row - Buttoned Images */}
      <div className="flyer-bottom-section">
        <div className="flyer-grid pc-layout">
          <div className="flyer-card fixed-height">
            <div className="image-container">
              <img src={peerSupportImage} alt="Peer Support Toggle" />
            </div>
            <button className="toggle-button" onClick={togglePeerSupportImage}>Button</button>
          </div>
          <div className="flyer-card fixed-height">
            <div className="image-container">
              <img src={infoImage} alt="Information Toggle" />
            </div>
            <button className="toggle-button" onClick={toggleInfoImage}>Button</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flyer;