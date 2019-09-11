import React, {Component} from 'react';
import axios from 'axios'
import './App.css';

class TopPlayers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            players: [],
            search: '',
            searchData: []
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.renderData = this.renderData.bind(this)
    }

    componentDidMount() {
        this.getPlayers()
    }

    async getPlayers () {
        const response = await axios.get(`http://localhost:3000/players`)
        const data = response.data
        console.log(data)
        this.setState({
            players: data
        })
        console.log("state:", this.state.players)
    }

    getSearchData(event) {
        event.preventDefault()
        const playerData = this.state.players.filter((eachPlayer) => eachPlayer.name.match(this.state.search))
            
                // let results = eachPlayer
                // console.log(results)
                // this.setState({
                //     searchData: results
                // })
                // console.log('search results data', this.state.searchData)
            
        
        console.log(playerData)
    }

    // getSearchData(event) {
    //     event.preventDefault()
    //     const playerData = this.state.players.filter((eachPlayer) => {
    //         if (eachPlayer.name.match(this.state.search)) {
    //             let results = eachPlayer
    //             console.log(results)
    //             this.setState({
    //                 searchData: results
    //             })
    //             console.log('search results data', this.state.searchData)
    //         }
    //     })
    //     console.log(playerData)
    // }




    async handleInputChange(event) {
        event.preventDefault()
        console.log('click')
        const search = event.target.value;
        await this.setState({
            search: search
        })
        await console.log(this.state.search)
       
    }

    renderData() {
        this.state.searchData.forEach(input => {
            return this.state.searchData.input
        });
        console.log(this.renderData)
    }


    render() {
        return (
            <>
            <h1>Search Players!</h1>
            <form onSubmit={(event) => this.getSearchData(event)}>
                <input 
                type='text'
                value={this.state.search}
                onChange={ this.handleInputChange }
                />

                
                <input type='submit' value="Search"></input>
            </form>
            <div><h1>{this.state.searchData.name}</h1>
            <img src={this.state.searchData.image}/>
            </div>
            </>
        )
    }
}

export default TopPlayers