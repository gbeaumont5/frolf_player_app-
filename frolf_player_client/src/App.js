import React, {Component} from 'react';
import './App.css';
import Players from './Players'

class Player extends Component {
    constructor (props) {
        super(props)
        this.state = {
            players: []
        }
    }


    render() {
        return(
            <div className="App">
                <h1>Hello</h1>
                <Players />
            </div>
            
        )
    }
}

export default Player;
