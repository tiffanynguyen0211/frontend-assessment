import React from 'react';
import { FaSearch } from 'react-icons/fa';
import classnames from 'classnames';

import Button from '../../elements/Button';

import './SearchForm.scss';

type SearchFormProps = {
    classNames?: string;
    onSearch?: () => void;
    searchButtonClassNames?: string;
};

/**
 * Search Form with input field and search icon button
 */
const SearchForm: React.FC<SearchFormProps> = ({
    classNames,
    onSearch = () => {},
    searchButtonClassNames,
}) => {
    const searchFormClassNames = classnames('SearchForm', {
        [`${classNames}`]: classNames,
    });
    const buttonClassNames = classnames('SearchForm__SearchButton', {
        [`${searchButtonClassNames}`]: searchButtonClassNames,
    });
    return (
        <form
            className={searchFormClassNames}
            onSubmit={e => {
                e.preventDefault();
                onSearch();
            }}
        >
            <input
                placeholder=""
                type="text"
                aria-label="search through website"
                className="SearchForm__SearchInput"
            />
            <Button
                classNames={buttonClassNames}
                ariaLabel="click to search"
                type="submit"
                icon={<FaSearch size={20} />}
            />
        </form>
    );
};

export default SearchForm;
