import React from 'react'
import { IoIosSearch, IoMdArrowDropdown } from 'react-icons/io'
import ContinentFilter from './continentFilter'
import HandleSearch from './handleSearch'
import { useSearchParams } from 'react-router-dom'


const FilterButton = () => {
    const searchRef = HandleSearch()
    const [searchParams] = useSearchParams()
    return (
        <div className='flex justify-between tablet:flex-col gap-8 mb-8'>
            <div className='flex gap-4 w-[35%] items-center rounded-[5px] pl-5 pr-2 shadow-md dark:bg-Blue dark:shadow-lg bg-white tablet:w-[70%] mobile:w-full'>
                <IoIosSearch className='w-[1.4rem] h-[1.4rem]' />
                <input type="search"
                    placeholder='Search for a country...'
                    defaultValue={searchParams.get('search')}
                    className='outline-0 flex-1 rounded-[5px] py-3' ref={searchRef} />
            </div>
            <div className='relative group w-fit'>
                <div className='rounded-[5px] cursor-pointer dark:bg-Blue bg-white shadow-md px-4 py-3 mb-2'>Filter by Region <IoMdArrowDropdown className='inline-block ml-3 align-middle' /></div>
                <div className='*:block *:w-full *:text-start *:px-4 last:pb-0 *:cursor-pointer absolute rounded-[5px] dark:bg-Blue bg-white shadow-md w-full hidden group-hover:block z-50 *:text-lg'>
                    <ContinentFilter />
                </div>
            </div>
        </div>
    )
}

export default FilterButton