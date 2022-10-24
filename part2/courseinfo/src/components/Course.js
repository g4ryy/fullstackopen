import React from 'react'
import Content from './Content'
import Header from './Header'

export default function Course({course}) {
    return (
    <div>
        <Header name={course.name}/> 
        <Content parts={course.parts} />
    </div>
    )
}