import React from 'react'
import './information.css'

export const Information = ({label, infoValue, iconUrl}) => {
    return (
        <div className="info">
            <section className="label__info">
                <div className="icon__info">
                    <img src={iconUrl} alt="icon" />
                </div>
                <p className="title__info">{label}</p>
            </section>
            <h3 className="value__info">{infoValue}</h3>
        </div>
    )
}
