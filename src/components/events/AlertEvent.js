import React from "react";


class AlertEvent extends React.Component {
    welcome = () => {
        alert("A warm welcome to DH")
    }
    render() {
        return(
         <button onClick={this.welcome}>Welcome</button>
        )
    }
}

export default AlertEvent;