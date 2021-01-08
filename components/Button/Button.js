import React from 'react';
import PropTypes from 'prop-types';
import style from './button.module.css';

const Button = ({children, disable,onClick}) => {
    return (
        <button onClick={()=>onClick()} className={style.button} disabled={disable}>
            {children}
        </button>
    )
}

export default Button;

Button.propTypes = {
    children: PropTypes.node.isRequired,
    disable: PropTypes.bool,
    onClick: PropTypes.func.isRequired
}

Button.defaultProps = {
    disable: false
}