import React, {useState, useEffect} from 'react';
import './intro.css';
import { Link } from 'react-scroll';
import Axios from 'axios';
import FileDownload from 'js-file-download';




const Intro = () => {

  
  const handleRedirect = () => {
    // Use either of the following methods to redirect

    // Method 1: Using window.location.href
    // window.location.href = 'https://drive.google.com/file/d/1VoOl9WYrPi_kd244Cj546jnRuB2Q6Wxo/view?usp=sharing';

    // Method 2: Using window.location.replace
    window.location.replace('https://drive.google.com/file/d/1VoOl9WYrPi_kd244Cj546jnRuB2Q6Wxo/view?usp=sharing');
  };

  return (
    <section id="intro">
        {/* <img src={automation2} alt="Automation Image" className='background_image'/> */}
        <div class="centered-button">
            {/* <div className="descritpion_text"> */}
              <div className='text-group'> 
                <h1 className='motivation_text'>Create your own automation</h1>
                <div className='smaller-description-text'>Automator helps to create simple computer automations without any programming expertise</div>
              </div>
              <button className='dowload_button' onClick={handleRedirect}>Download for Windows</button>

            {/* </div> */}
        </div>
    </section>
  )
}

export default Intro;