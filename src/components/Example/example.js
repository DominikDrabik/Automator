import React from 'react';
import './example.css';
import videoExample from './automation_new_presenstation.mp4'



const Example = () => {


  return (
    <section id="Example">

      <h2>Created a email extractor from .pdf with automator</h2>

      <video  controls>
        <source src={videoExample} type="video/mp4" />
      </video>

      <h2>I have imported the automation i previously created</h2>
      <span>The idea behind it was to screenshot the icon of the app we want to open and use it in the automation. 
        Then, it clicks on the Adobe Acrobat icon to open the PDF file. 
        Next, Automator clicks on the opened PDF file so we can select the file. 
        Then, it uses the 'copy and search' option with the input '@' to search and copy the email. 
        Afterward, the program closes the .PDF file and clicks on the Excel icon. 
        After opening Excel, the program selects a free spot and pastes the email address. 
        It iterates three times, as specified in the previously loaded file.</span>
    


    </section>
  )

  
}

export default Example;