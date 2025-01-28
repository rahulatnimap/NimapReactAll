import React from "react";

export default class convertClass extends React.Component {

    getDate() {
        const date = new Date();
        return date
    }

    getHours() {
        const hour = this.getDate().getHours();
        let time;

        if(hour < 12){
         time = 'Morning'
        } else if (hour >= 12 && hour < 17){
            time = 'AfterNoon'
        }else {
            time = "Night"
        }
        return time
    }

    render() {

        return <>
            <>Good {this.getHours()} {this.props.UserName} </>
        </>
    }
}