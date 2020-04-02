import React from 'react';
import './card.styles.scss';

export const CardContent = props => {
    return (
        <div className="col card-container">
            <img src={`https://picsum.photos/id/${props.id}/200/300?grayscale`} alt="Random img"/>
            <h4>{props.title}</h4>
        </div>
    )
}