
import React, { Component } from 'react';

//Components
import Featured from './Featured'
import Subscriptions from './Subscriptions'
import Blocks from './Blocks'
import Poll from './Poll'


const URL_HOME = ' http://localhost:3001/home'

class Home extends Component {

    constructor(props){
        super(props)

        this.state = {
            home : '',
        }


    }

    componentDidMount(){
        fetch(URL_HOME, {method : 'GET'})
            .then(res => res.json())
            .then(json => {
                this.setState({
                    home : json
                })
            })
    }

    render(){
        return (
            <div>
                <Featured slides={ this.state.home.slider } />
                <Subscriptions/>
                <Blocks blocks={this.state.home.blocks} />
                <Poll />
            </div>
        )
    }
}


export default Home;