import React from 'react';
import './button.style.scss';

const Styles = ['btn--primary', 'btn--outline']
const Sizes = ['big', 'medium', 'small']
const Button = ({
                    children,
                    buttonSize,
                    buttonStyle,
                    onClick,


                }) => {
    const checkButtonStyle = Styles.includes(buttonStyle) ? buttonStyle : Styles[0];
    const checkButtonSize = Styles.includes(buttonSize) ? buttonSize : Sizes[0];
    return <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}

    >
        {children}
    </button>

};

export default Button;