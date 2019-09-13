import React, {Component} from 'react';
import './App.css';
import Players from './components/Players'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ShowPlayer from './components/ShowPlayer'
import axios from 'axios'

class Player extends Component {
    constructor (props) {
        super(props)
        this.state = {
            players: [],
            playerId: ""
        }
        if (this.state.playerId !== ""){
            console.log("Updated ID", this.state.playerId)
        }
       
    }

    handleClick(id) {
        this.setState({
            playerId: id
        })
     console.log(this.state.playerId)
    }
    
    
    render() {
        return(
            <div className="App">
                 <Router className='nav'>
                     <nav>
                    <Link to='/'>Home</Link>
                    </nav>
                    <Route path="/" exact render={props => (
                        <Players handleClick = {this.handleClick}/>
                    )}
                        />
                    <Route path={`player/${this.state.playerId}`}
                    render={props => (
                        <ShowPlayer
                        {...props}
                        />
                    )}/>
                </Router>
            </div>
            
        )
    }
}

export default Player;
