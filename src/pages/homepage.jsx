import React from 'react'
import Country from '../component/country'
import FilterButton from '../component/filterButton'

const Homepage = () => {
    return (
        <div className=''>
            <FilterButton />
            <Country />
        </div>
    )
}

export default Homepage