import React from "react";


class AppComponentLifeCycle extends React.Component {

    constructor(props) {
        super(props);
        console.log("the constructor and will be the first to run.")
        this.state = {
            firstName: "dohv",
            data: []
        }
    }

    componentDidMount() {
        console.log("Component did mount and will be last to run")
        const API_URL = "https://restcountries.com/v3.1/all"
        fetch(API_URL).then(
            (response) => {
                return response.json()
            }
        ).then((data) => {
            this.setState({data,})
        }).catch(
            (error) => {
                console.log(error)
            }
        )
    }

    renderCountries = () => {
        return this.state.data.map((country) => {
            return (
                <div>
                    <div>
                        {' '}
                        <img src={country.flags.svg} alt={country.name.common}/>{' '}
                    </div>
                    <div>
                        <h1>{country.name.common}</h1>
                        <p>Population: {country.population}</p>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className='App'>
                <h1>Countries Flags</h1>
                <h1>Calling API</h1>
                <div>
                    <p>There are {this.state.data.length} countries in the api</p>
                    <div className='countries-wrapper'>{this.renderCountries()}</div>
                </div>
            </div>
        )
    }

}

export default AppComponentLifeCycle