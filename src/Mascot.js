import React from 'react';
import './Mascot.css';

class Mascot extends React.Component{
    constructor() {
        super()
        this.state = {
            name: ''
        }
    }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
      }
     
      handleSubmit = (event) => {
        alert('A form was submitted: ' + this.state);
     
        fetch('http://localhost:3000/store-data', {
            method: 'POST',
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify(this.state)
          }).then(function(response) {
            console.log(response)
            return response.json();
          });
     
        event.preventDefault();
    }
    render() {
        return(
            <div className='mas'>
                <div className='mascot'></div>
                <div className='chat'>
                    <div className='okno'>
                        <form onSubmit={this.handleSubmit}>
                            <Out messages={this.state.messages}></Out>
                            <div className='chat_form'>
                                <input id='text' className='text_in' placeholder='Поле ввода' type="text" value={this.state.value} name="name" onChange={this.handleChange}></input>
                                <button className='but_chat' value="Submit"></button>
                            </div>
                        </form>
                    </div>
                    <button className='clear'>X</button>
                </div>
            </div>
        );
    }
}
class Out extends React.Component {
    render() {
        return (
            <ul className="message-list">
                {this.props.messages.map(message => {
                    return (
                        <li key={message.id}>
                            <div className='id_mess'>
                                {message.senderId}
                            </div>
                            <div className='text_mess'>
                                {message.text}
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default Mascot;