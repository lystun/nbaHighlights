
import React, { Component } from 'react';


class Subscriptions extends Component {

    constructor(props){
        super(props);

        this.state = {
            email : '',
            error : false,
            success : false 
        }
    }

    changeInput = (e) =>{
        
        const value = e.target.value;

        this.setState ({
            email : value
        })
    }

    clearMessages = () => {

        let vm = this;

        setTimeout(
            function(){
                this.setState({
                    error : false,
                    success : false
                })
            }.bind(this), 3000
        )
    }

    saveSubscription = (email) =>{

        const URL_EMAIL = '  http://localhost:3001/subcriptions'

        fetch(URL_EMAIL, 
            {
                method:'POST',
                headers : {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({email})
            })
            .then(res => res.json())
            .then( ()=>{
                this.setState({
                    email : '',
                    success : true
                })
            })
    }

    handleSubmit = (e) =>{
        e.preventDefault();

        let email = this.state.email;

        let regex = /\S+@\S+\.\S+/;
 
        if(regex.test(email)){
            this.saveSubscription(email)

        }else {
            this.setState({
                error : true
            })

            this.clearMessages()
        }


    }


    render(){
        return(
            <div className="subcribe_panel">
                <h3>  Subscribe to Us </h3>
                
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="youremail@email.com"
                            value={ this.state.email } 
                            onChange={this.changeInput}
                        />

                        <div className={ this.state.error ? "error show" : "error" }> Check Your Email</div>
                        <div className={this.state.success ? "success show" : "success"  }>Thank You</div>
                    </form>

                    <small>
                        lorem ipsum dolor et, conscretuyrb paribos a friend is one with whom you get the privilege to share thrie highs and lows
                    </small>
                </div>
            </div>
        )
    }
}



export default Subscriptions;