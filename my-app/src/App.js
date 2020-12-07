import './App.css';
import Search from './Components/Search';
import SoundList from './Components/SoundList';
import React, {useState, useEffect} from 'react';

const App= (props)=> {

const [filterText, setFilterText] = useState('');
const [listUpdate,setListUpdate] = useState(false);

//Update the filter based on the input form
const filterUpdate = (evt) => {
  setFilterText(evt.target.value);
};

//Used for playing audio clip
const start = (name) => {
  let audio = new Audio(name);
  audio.play();
} 

//Rendering of main page.
  return (
    <div className="App">
      <header className="App-header"><h1 style={{fontSize: '50px',marginBottom: '0px'}}>PA3: Soundboard</h1>
      <h2 style={{fontSize: '18px',marginBottom: '0px'}}>Sources: 
      <a style={{marginLeft: '10px',color: 'orchid'}} href="https://www.youtube.com/channel/UC1DCedRgGHBdm81E1llLhOQ">Pekora</a>, 
      <a style={{marginLeft: '10px',color: 'orchid'}} href="https://www.youtube.com/channel/UChAnqc_AY5_I3Px5dig3X1Q">Korone</a>, 
      <a style={{marginLeft: '10px',color: 'orchid'}} href="https://www.youtube.com/channel/UC1CfXB_kRs3C-zaeTG3oGyg/featured">Haachama</a>
      </h2>
        <Search onFilterChange={filterUpdate}/>
        <table>
          <tr>

          <td style={{verticalAlign: 'top'}}>
            <table>
              <tr><th style={{color:'orange'}}>Pekora<img src='./images/carrots.png'></img></th></tr>
              <tr><td><SoundList data = {props.pekora} start = {start} filter = {filterText} button="Pekora-button"/></td></tr>
            </table>
          </td>

          <td style={{verticalAlign: 'top'}}>
            <table>
              <tr><th style={{color: 'sandybrown'}}>Korone<img src='./images/bone.png'></img></th></tr>
              <tr><td><SoundList data = {props.korone} start = {start} filter = {filterText} button="Korone-button"/></td></tr>
            </table>
          </td>

          <td style={{verticalAlign: 'top'}}>
            <table>
              <tr><th style={{color:'red'}}>Hachaama<img src='./images/heart.png'></img></th></tr>
              <td><SoundList data = {props.haachama} start = {start} filter = {filterText} button="Haachama-button"/></td>
            </table>
          </td>

          </tr>
          </table>
      </header>
    </div>
  );
}

export default App;
