import React from 'react';
import 'tachyons';

const SearchBox = ({searchChange}) => {
    return (
        <div className="pa2">
            <input 
                type="search"
                placeholder="Find your RoboFriend"
                className="pa3 ba b--green bg-lightest-blue"
                onChange={searchChange}
            />
        </div>
    );
};

export default SearchBox;
