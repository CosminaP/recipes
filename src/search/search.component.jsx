import React from 'react';
import './search-box.styles.scss';

export const Search = ({ placeholder, handleChange}) => {
    return (
        <input type="search" className="search" placeholder={placeholder} onChange={handleChange} />
    );
}