import React from 'react'
import Part from './Part'

export default function Content({parts}) {
    return (
    <div>
        {parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
        <h4>total of {parts.reduce((total, part) => total + part.exercises, 0)} exercises</h4>
    </div>
    )
}