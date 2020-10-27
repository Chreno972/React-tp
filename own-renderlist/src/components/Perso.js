import React, { Fragment } from 'react';

const Perso = ({ name, age, profession, children }) => {
    return (
        <Fragment>
            <h2>{name} is {age} years old and is a {profession}</h2>
            { children ? <p>{children}</p> : ''}
        </Fragment>
    )
}

export default Perso;