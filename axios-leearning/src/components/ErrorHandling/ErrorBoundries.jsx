import React, { Component } from "react";

export default class ErrorBoundries extends Component {

    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError() {
      return   { hasError : true }
    }

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render(){
        if(this.state.hasError){
            return this.props.fallback
        }
        else return     this.props.children;
    }

}