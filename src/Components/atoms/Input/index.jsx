import React from 'react';
import './input.style.scss'

const Input = ({label,children, ...props}) => {
    return(
        <div>
            <label htmlFor={props.name}>{label}</label>
            <input className="input" type="text" id={props.name} {...props} >{children} </input>
             <span className={'Input__input--password-reveal'}>
                <input ref={inputRef} type="text" className={'Input__input_input'} id={props.name} {...props} />
                {props.type === 'password' && props.canReveal && (
                    <EyeIcon className={'Input__input--password-reveal-icon'} onClick={toggleReveal} />
                )}
            </span>
        </div>

    )
};

export default Input;
