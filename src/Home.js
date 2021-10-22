import axios from "axios";
import React from "react";

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
            <div>
            <ul>
               { this.state.users.map(
                   user => <li>{ user.name }</li>
               )}
            </ul>
            <h1>Hello</h1>
            </div>
        );
    }
}