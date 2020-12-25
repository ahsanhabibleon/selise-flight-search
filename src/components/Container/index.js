import React from 'react'
import './index.scss'

function Index(props) {
    return (
        <div className="Container">
            {props.children}
        </div>
    )
}

export default Index
