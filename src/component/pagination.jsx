import React from 'react'

import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";


const Pagination = ({ count }) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const PAGE_SIZE = 10
    const pageCount = Math.ceil(count / PAGE_SIZE)

    let currentPage = !searchParams.get('page') ? 1 :
        Number(searchParams.get('page'))

    function nextPage() {
        const next = currentPage === pageCount ? currentPage : currentPage += 1
        searchParams.set('page', next)
        setSearchParams(searchParams)
    }
    function prevPage() {
        const prev = currentPage === 1 ? currentPage : currentPage -= 1
        searchParams.set('page', prev)
        setSearchParams(searchParams)
    }
    if (pageCount <= 1) return null;

    return (
        <>
            <p>
                Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to
                <span> {currentPage === pageCount ?
                    count : currentPage * PAGE_SIZE} </span>
                of <span> {count}</span> countries
            </p>

            <div className='flex gap-6'>
                <button
                    className='rounded-[5px] p-3 bg-white shadow-md dark:bg-Blue w-[130px] cursor-pointer disabled:cursor-not-allowed'
                    onClick={prevPage}
                    disabled={currentPage === 1}>
                    <HiChevronLeft className='inline-block align-middle mr-2' />
                    Previous
                </button>
                <button
                    className='rounded-[5px] p-3 bg-white shadow-md dark:bg-Blue w-[130px] cursor-pointer disabled:cursor-not-allowed'
                    onClick={nextPage}
                    disabled={currentPage === pageCount}>
                    Next
                    <HiChevronRight className='inline-block align-middle ml-2' />
                </button>
            </div>

        </>
    )
}

export default Pagination