import logo from './logo.svg';
import './App.css';
import Search from './Components/Search';
import SoundList from './Components/SoundList';
import React, {useState, useEffect} from 'react';

const App= (props)=> {

const [filterText, setFilterText] = useState('');
const [listUpdate,setListUpdate] = useState(false);

const filterUpdate = (evt) => {
  setFilterText(evt.target.value);
  console.log(filterText);
};

const start = (name) => {
  let audio = new Audio(name);
  audio.play();
} 

  return (
    <div className="App">
      <header className="App-header"><h1>pa3: soundboard</h1>
        <Search onFilterChange={filterUpdate}/>
        <table><tr><td>
        <table>
          <tr><th>Korone<img src='bone.png'></img></th><th>Pekora<img src='carrots2again.png'></img></th><th>Hachaama<img src='heart.png'></img></th></tr>
          <tr><td><SoundList data = {props.korone} start = {start} filter = {filterText} button="Korone-button"/></td>
          <td><SoundList data = {props.pekora} start = {start} filter = {filterText} button="Pekora-button"/></td>
          <td><SoundList data = {props.haachama} start = {start} filter = {filterText} button="Haachama-button"/></td></tr>
          </table>
          </td>
          <td style={{verticalAlign: 'top'}}>test</td>
          </tr>
          </table>
      </header>
    </div>
  );
}

export default App;
