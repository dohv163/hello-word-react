import React from "react";
import axios from "axios";
import styled from "styled-components";
import moment from "moment";
import {
    TiSocialLinkedinCircular,
    TiSocialGithubCircular,
    TiSocialTwitterCircular,
} from 'react-icons/ti'

class ThirdPartyLib extends React.Component {

    constructor(props) {
        super(props);
        console.log("The constructor and will be the first to run")
        this.state = {
            firstName: "dohv",
            data: [],
            day: 1,
            congratulate: ""
        }
    }

    componentDidMount() {
        const API_URL = "https://restcountries.com/v3.1/all"
        axios.get(API_URL).then((response) => {
            this.state.data = response.data
        }).catch((error) => {
            console.log(error)
        })
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("next props ", nextProps)
        console.log("next state ", nextState)

        if (nextState.day > 31) {
            return false;
        } else {
            return true;
        }
    }

    doChallenge = () => {
        this.setState({ day: this.state.day + 1,})
    }

    renderCountries = () => {
        return this.state.data.map((country) => {
           // const languageOrLanguages = country.languages.length > 1 ? "Language" : "Languages"
           // const formatLanguages = country.languages.map(({name}) => name).join(", ")
            return (
                <div>
                    <div>
                        {' '}
                        <img src={country.flags.svg} alt={country.name.common}/>{' '}
                    </div>
                    <p>
                        {/*{console.log(Object.values(country.languages))}*/}
                        {/*{languageOrLanguages}: {formatLanguages}*/}
                    </p>
                    <div>
                        <h1>{country.name.common}</h1>
                        <p>Population: {country.population}</p>
                    </div>
                </div>
            )

        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("prevProps, ", prevProps)
        console.log("prevState, ", prevState)


        if (prevState.day === 30) {
            this.setState({
                congratulate: 'Congratulations,Challenge has been completed',
            })
        }
        console.log(prevState, prevProps)

    }

    render() {
        return(
            <div className="app">
                <Header>
                    <Title>Camunda 8</Title>
                    <h2>Microservice with Camunda 8 Orchestrator</h2>
                    <h3>Workflow Library</h3>
                    <small>Jul 01, 2024</small>
                </Header>
                <p>This challenge was started {moment('2024-07-01').fromNow()}</p>
                <p>The challenge will be over in {moment('2024-07-31').fromNow()}</p>
                <p>Today is {moment(new Date()).format('MMMM DD, YYYY HH:mm')}</p>
                <h1>Camunda 8 Components</h1>
                <TiSocialLinkedinCircular/>
                <TiSocialGithubCircular/>
                <TiSocialTwitterCircular/>

                <button onClick={this.doChallenge}>Do Challenge</button>
                <p>Challenge: Day {this.state.day}</p>
                {this.state.congratulate && <h2>{this.state.congratulate}</h2>}

                <div>
                    <p>There are {this.state.data.length} countries in the api</p>
                    <div className='countries-wrapper'>{this.renderCountries()}</div>
                </div>

            </div>
        )
    }


}

const Title = styled.h1`
    font-size: 70px;
    font-weight: 300;
`

const Header = styled.header`
    background-color: #61dbfb;
    padding: 25px;
    padding: 10px;
    margin: 0;
`

export default ThirdPartyLib