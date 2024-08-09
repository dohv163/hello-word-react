import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";


class App extends React.Component {

    render() {
        return (
            <div className="app">
                <Header data={dataHeader}/>
                <Footer date={new Date()}/>

            </div>
        )
    }

}

const dataHeader = {
    headerStyle: {
        backgroundColor: '#61DBFB',
        fontFamily: 'Helvetica Neue',
        padding: 25,
        lineHeight: 1.5,
    },
    welcome: "Welcome to SHBF demo",
    category: "Camunda 8",
    title: "Workflow Library",
    speaker: {
        firstName: "Hoang",
        lastName: "Do"
    },
    date: new Date()
}


export default App;