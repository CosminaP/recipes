import React from 'react';
import './card-list.styles.scss';
import {CardContent} from './CardContent.component';

export const Card = props => {
    return (
        <div className="card-list">
            {props.lists.map(list =>
                <CardContent key={list.id} id={list.id} title={list.title} />
            )}
        </div>
    );
}

