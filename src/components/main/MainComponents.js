import React from 'react'

const Components = () => {
    return(
        <React.Fragment>
            <li>Camunda 8</li>
            <li>Keycloak</li>
            <li>Spring Boot</li>
            <li>Postgres</li>
        </React.Fragment>
    )
}

const MainComponent = () => {
    return(
        <ul>
            <Components/>
        </ul>
    )
}

