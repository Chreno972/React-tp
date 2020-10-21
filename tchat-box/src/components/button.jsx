import './button.css';

import React from 'react';

const Button = ({ vieillir }) => (
    <button onClick={vieillir}>
        Viellir de 10 ans
    </button>
)

export default Button;