import React from 'react'

export default function CardContainer(props) {
    return (
        <div className="card-container">
            {props.children}
        </div>
    )
}
