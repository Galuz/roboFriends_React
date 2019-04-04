import React from 'react';
import 'tachyons';

export default ({id, username, name}) => {
    return(
        <div className="bg-light-green dib br3 pa3 ma2 grow shadow-5">
            <img src={`https://robohash.org/${id}`} alt=""/>
            <div className="tc">
                <h2>{username}</h2>
                <span>{name}</span>
            </div>
        </div>
    );
}
