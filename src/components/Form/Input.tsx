import React, { useContext, forwardRef } from 'react';
import { InputInterface } from '../../utils/interfaces';

const Input = forwardRef<HTMLInputElement, InputInterface>((props, ref) => {

    return (
        <>
            { props.error && <p className="error-message">{props.error}</p>}
            <input
                className={"input"}
                type="text"
                ref={ref}
                maxLength={28}
                autoFocus={true}
            ></input>
        </>

    );
})

export default Input;
