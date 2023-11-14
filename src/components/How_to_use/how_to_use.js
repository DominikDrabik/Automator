import React from 'react';
import './how_to_use.css';
import times_to_click from '../../assets/choose_file_times_to_click.png';
import search_n_copy from '../../assets/search_and_copy.png';
import paste from '../../assets/paste.png';




const HowToUse = () => {


  return (
    <section id="HowToUse">
        <h1>How to Use</h1>

<h2>Click on Elements</h2>
<span className='description-text'>
    The main idea of the app is to capture screenshots of clickable elements. After selecting the parts to click, you can load them into our automation by clicking the 'choose' button and selecting the previously screenshot items. You can also specify the number of times the image should be clicked by increasing the counter: <em>'Paste photo of times to click'</em>.
</span>
<img src={times_to_click} className='center_img_normal'></img>

<h2>Write Some Text</h2>
<span className='description-text'>
    Simply paste your text into the writing section and click 'add.' The program will write your text. It can be used for wirting data that is already give like passwords.
</span>
<img src={times_to_click} className='center_img_normal'></img>


<h2>Search and Copy</h2>
<span className='description-text'>
    This functionality works by selecting the text (CTRL+A) and searching for a specific string sequence. It then copies the first word found with the given sequence and puts it in the clipboard. For example, if a .pdf file is open, you can use 'Search and Copy' to extract emails. Just input '@,' click 'search and copy,' and it will select the text and extract the first word containing '@.'
</span>

<img src={search_n_copy} className='center_img_normal'></img>



<h2>Paste</h2>
<span className='description-text'>It pastes the text.</span>

<img src={paste} className='center_img_small' width="300px"></img>


<h2>How to Put It Together</h2>
<span className='description-text'>You can change the order of occurring events by dragging and dropping different steps. Alternatively, you can select the items and use the 'UP'/'DOWN' buttons.</span>

<h2>Import and Export</h2>
<span className='description-text'>
    You can import automations using the import button and export them by saving them (in .txt format).
</span>

<h2>!!! Remember to have your config.ini File in the same folder/directory as Automator.exe !!!</h2>


    </section>
  )
}

export default HowToUse;