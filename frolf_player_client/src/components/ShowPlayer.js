import React, {Component} from 'react';
import axios from 'axios'

class ShowPlayer extends Component {
    constructor(props) {
        super(props)
        this.state({
            players: [],
            playerId: '',
            player: {}
        })
        
    }



    render(){
        return(
            <div className='App'>
                <h2>Show Player</h2>

            </div>
        )
    }
}



export default ShowPlayer;