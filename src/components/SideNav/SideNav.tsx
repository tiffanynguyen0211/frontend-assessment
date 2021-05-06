import React, { useState } from 'react';
import classnames from 'classnames';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Button from '../../elements/Button';

import './SideNav.scss';

/**
 * Side Navigation, can be minimised or expaneded on click
 * Will display wrapped content passing through
 */
const SideNav: React.FC<{ classNames?: string }> = ({
    children,
    classNames,
}) => {
    const [hideSideNav, setHideSideNav] = useState(false);
    const sideNavClassNames = classnames('SideNav', {
        'SideNav--hidden': hideSideNav,
        [`${classNames}`]: classNames,
    });
    return (
        <nav className={sideNavClassNames}>
            <header className="SideNav__Header">
                {!hideSideNav && <h1 className="SideNav__Title">Side Bar</h1>}
                <Button
                    onClick={() => setHideSideNav(!hideSideNav)}
                    ariaLabel="click to toggle side navigation"
                    icon={
                        !hideSideNav ? (
                            <FaArrowRight size={20} />
                        ) : (
                            <FaArrowLeft size={20} />
                        )
                    }
                    classNames="SideNav__Button"
                />
            </header>
            {children}
        </nav>
    );
};

export default SideNav;
