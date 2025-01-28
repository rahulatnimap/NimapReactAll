import React, { Component } from "react";

export default class Lifecyclemethods extends Component{
    
    //  state = {
    //     counter : 0
    //  }

    //  AddtoState = () => {
    //    return this.setState(prevState => {
    //     return {
    //         counter : prevState.counter + 1
    //     }
    //    })
    //  }

    //  Substract = () => {
    //     return this.setState(prevState => {
    //      return {
    //          counter : prevState.counter - 1
    //      }
    //     })
    //   }
    
    constructor(){
        super();
        this.state =  {
         count : 0
        }
        this.Decrement = this.Decrement.bind(this)
    }

    increment = () => {
        this.setState(prev => {
            return {
                 count : prev.count + 1
            }
        })
    }

    Decrement (){
        if (this.state.count > 0) {
            this.setState(prev => {
                return {
                     count : prev.count - 1
                }
            })
        } else alert("No Further Decrement Possible !!! Count is 0")
    }
    

    
    render(){
        console.log(this.props.type);
        
        return <div>
            {/* {this.props.type} */}
            <button onClick={this.Decrement}>-</button>
             {this.state.count}
            <button onClick={this.increment}>+</button>
        </div>
    }
}