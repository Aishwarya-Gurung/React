import React from 'react';
import './status.css';

export const Status = ({label, count}) => {
     return (
        <div className="status">
            <p className="count__status">{count}</p>
            <div className="label__status">
                <p>{label}</p>
            </div>
        </div>
    )
}