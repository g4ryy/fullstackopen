import React from 'react'

export default function Filter({filterName, handleFilterChange}) {
    return (
    <div>
        filter shown with <input value={filterName} onChange={handleFilterChange}/>
    </div>
    )
}