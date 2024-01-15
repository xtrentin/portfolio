import Badge from "react-bootstrap/Badge";
import "./Tags.css"

import React from 'react'

const Tags = (props) => {
    return (
        <div className="tags">
            {props.tags.map((tag, i) => (
                <Badge
                    pill className="tag"
                    key={props.id + i}
                    >
                    {tag}
                </Badge>
            ))}
        </div>
    )
}

export default Tags
