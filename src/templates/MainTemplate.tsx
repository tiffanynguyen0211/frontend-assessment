import React from 'react';

import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import SideNav from '../components/SideNav';
import { staticContent } from '../static/staticContent';

import './MainTemplate.scss';

const MainTemplate: React.FC<{}> = () => {
    return (
        <div className="MainTemplate">
            <Header classNames="MainTemplate__Header">
                <SearchForm
                    classNames="MainTemplate__SearchForm"
                    searchButtonClassNames="MainTemplate__SearchButton"
                />
            </Header>
            <main className="MainTemplate__Content">
                <section className="MainTemplate__Section">
                    <h1>Content</h1>
                    <p>{staticContent}</p>
                </section>
                <SideNav classNames="MainTemplate__SideNav" />
            </main>
        </div>
    );
};

export default MainTemplate;
