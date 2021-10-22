import React from "react";
import '../styles/time.css'
export default class Time extends React.Component{
    constructor(props){
        super(props)
        this.state = { time: new Date() }
    }
    componentDidMount(){
        this.timerID = setInterval(() =>
            this.clockTick(), 1000
        )
    }
    clockTick(){
        this.setState({
            time: new Date()
        })
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    render(){
        return(
        <div>
        <h1 className = "time"> Hello, it is: </h1>
        <h1>{ this.state.time.toLocaleTimeString() }</h1>
        <h3>Join these others now!</h3>
        </div>
        )}
}