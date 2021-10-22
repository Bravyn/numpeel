import axios from "axios";
import React from "react";
import '../styles/home.css';

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = { users:[] }
    }
    componentDidMount(){
        axios.get(this.props.url)
        .then(res => {
            this.setState({
                users: res.data
            })
        })
    }
    render(){
        return(
            <div className = "home">
            <ul>
               { this.state.users.map(
                   user => <button className = "namebtn"><li>{ user.name }</li></button>
               )}
            </ul>
            </div>
        );
    }
}