import React from 'react'

export default function Filter({filterName, handleFilterChange}) {
    return (
    <div>
        find countries <input value={filterName} onChange={handleFilterChange}/>
    </div>
    )
}