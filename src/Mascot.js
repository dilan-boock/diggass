import React from 'react';
import { useState, useEffect } from "react";
import './Mascot.css';

function Mascot(){
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {setIsActive(current => !current); };

    const [setIsLoaded] = useState(false);
    var [state, setState] = useState();
    
    //var [state, setState] = useState(" ");
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `DIGGAS`;
        fetch(" ")
        .then(res => res.json())
        .then(
            (result) => {
            setIsLoaded(true);
            setState(result);
            }
        )
      });
    
      function ButtonClick() {
        var text = document.getElementById('text').value;
        setState(state = text);
      } 
    /*function handleChange(event) {
        this.setState({value: event.target.value});
      }
    
    function  handleSubmit(event) {
        alert('Отправленное имя: ' + this.state.value);
        event.preventDefault();
      }*/

    return(
        <div className='mas'>
            <div className='mascot' style={{display: isActive ? 'block' : 'none' }} onClick={handleClick}></div>
            <div className='chat' style={{display: isActive ? 'none' : 'block' }}>
                <div className='okno'>
                    <form>
                        <p className='out' placeholder='Поле вывода'>Ваше сообщение: {state}</p>
                        <div className='chat_form'>
                            <input id='text' className='text_in' placeholder='Поле ввода' type="text"></input>
                            <button className='but_chat' onClick={(ButtonClick)}></button>
                        </div>
                    </form>
                </div>
                <button className='clear' onClick={handleClick}>X</button>
            </div>
        </div>
    );
}

export default Mascot;