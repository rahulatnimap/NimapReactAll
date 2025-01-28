import React from "react";
import { Link } from "react-router-dom"

export default class Header extends React.Component{
    render(){
        const styless = {
          display : 'flex',
          justifyContent : 'space-around',
          textDecoration : 'none'    
             }
        return <>
        <navbar style={styless}>
            <Link to="/">Home</Link>
            <Link to="/methods">Lifecyclemethods</Link>
            <Link to="/conversion">Conversion</Link>
            <h1>{this.props.UserName}</h1>
        </navbar>
        </>
    }
}