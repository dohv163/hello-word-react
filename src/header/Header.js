import React from "react";
import {showDate} from "../utils/display-datetime";

const Header = ({
        data: {
            headerStyle,
            welcome,
            category,
            title,
            speaker: {firstName, lastName},
            date
        }
    }) => {
    return (
        <header style={headerStyle}>
            <h1>{welcome}</h1>
            <h2>{category}</h2>
            <h3>{title}</h3>
            <p>{firstName} {lastName}</p>
            <small>{showDate(date)}</small>
        </header>
    )
}

export default Header