import React, { ReactNode } from 'react';
import classnames from 'classnames';

import './Button.scss';

type ButtonProps = {
    onClick?: () => void;
    icon?: ReactNode;
    ariaLabel: string;
    buttonLabel?: string;
    classNames?: string;
    type?: 'button' | 'submit' | 'reset';
};

/**
 * Common Button Component
 */
const Button: React.FC<ButtonProps> = ({
    icon,
    ariaLabel,
    buttonLabel,
    classNames,
    type = 'button',
    onClick = () => {},
}) => {
    const buttonClassNames = classnames('Button', {
        [`${classNames}`]: classNames,
    });
    return (
        <button
            aria-label={ariaLabel}
            className={buttonClassNames}
            type={type}
            onClick={onClick}
        >
            {icon && <span>{icon}</span>}
            {buttonLabel && <span>{buttonLabel}</span>}
        </button>
    );
};

export default Button;
