import React from 'react'
import { useSearchParams } from "react-router-dom";

const HandleFilter = ({ options, field }) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const currentFilter = searchParams.get('continent')

    function handleClick(value) {
        searchParams.set(field, value)
        if (searchParams.get('page')) searchParams.set('page', 1)
        setSearchParams(searchParams)
        if (searchParams.get('search')) searchParams.set('search', '')
        setSearchParams(searchParams)
    }


    return (
        <>
            {options.map((option, index) => {
                const active = option === currentFilter
                return (
                    <button
                        className={`dark:hover:bg-veryDarkBlue hover:bg-lightGray ${active ? 'dark:bg-veryDarkBlue bg-lightGray' : 'bg-none'}`}
                        disabled={option === currentFilter}
                        key={index}
                        onClick={() => handleClick(option)}
                    >
                        {option}
                    </button>
                )
            })
            }
        </>
    )
}

export default HandleFilter