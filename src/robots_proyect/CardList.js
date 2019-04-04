import React from 'react';
import Card from './Card';
import 'tachyons';

const CardList = ({robots}) => {
    const cards = robots.map(robot => 
        <Card id ={robot.id} username={robot.username} name={robot.name}/>
    );
    return (
        <div>
            {cards}
        </div>
    );
};

export default CardList;
