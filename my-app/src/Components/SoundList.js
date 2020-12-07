import React, {useState, useEffect} from 'react';

const SoundList = (props) => {
    //console.log('This is my directory file', this.props.data);
    const start = (evt) => {
        console.log(evt.target.value);

        var audio = new Audio("./audioFiles/"+evt.target.value);
        audio.play();
      }
    const SoundList = props.data.map(sound => {
      var myString1 ="";
      var myString = "";
      myString += props.filter;
      myString1 +=sound.name;
        if ((sound.name).includes(props.filter) || sound.name.toLowerCase().includes(props.filter)) {
        return (
            <tr key={sound.name}>
                <td> 
                    <button className={props.button} value= {sound.file} onClick= {start}>
                    {sound.name}</button> </td>
            </tr>
        );
        }
    });

    return <div>{SoundList}</div>;
};
export default SoundList;