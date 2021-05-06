import React from 'react';
import classnames from 'classnames';

import './Header.scss';
/**
 * Common Header Component
 */
const Header: React.FC<{
    classNames?: string;
}> = ({ classNames, children }) => {
    const headerClassNames = classnames('Header', {
        [`${classNames}`]: classNames,
    });
    return (
        <header className={headerClassNames}>
            <h1 className="Header__Title">Header</h1>
            {children}
        </header>
    );
};

export default Header;
