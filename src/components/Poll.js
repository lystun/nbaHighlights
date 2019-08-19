 
 import React, { Component } from 'react';


 const URL_TEAMS = 'http://localhost:3001/teams'

 class Poll extends Component {

    constructor(props){
        super(props)

        this.state = {
            pollTeams : []
        }

    }

    fetchPoll(){
        fetch(`${URL_TEAMS}?poll=true&_sort=count&_order=desc` , {method : 'GET'})
            .then(res => res.json())
            .then(json => {
                this.setState({
                    pollTeams : json
                })
            })
    }

    componentDidMount(){
        this.fetchPoll()
    }

    addCount(count, id){
        fetch(`${URL_TEAMS}/${id}`, 
        {
            method:'PATCH',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({count : count+1})
        })
        .then( ()=>this.fetchPoll())
    }

    renderPoll(){

        const position = ['1st', '2nd', '3rd'];

        return this.state.pollTeams.map( (item,index) => {
            return(
                <div key={item.id} className="poll_item" onClick={() => this.addCount(item.count, item.id) }>
                    <img alt={item.name} src={`/images/teams/${item.logo}`}  />
                    <h4>{position[index]}</h4>
                    <div>{item.count} Votes</div>
                </div>
            )
        })
    }


    render(){
        return(
            <div className="home_poll">
                <h3>Who Will Be The Next Champion?</h3>
                <div className="poll_container">
                    {this.renderPoll()}
                </div>
            </div>
        )
     }
 }


 export default Poll