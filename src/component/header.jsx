import React, { useContext } from 'react'
import { LuMoonStar } from 'react-icons/lu'
import { Outlet, useNavigate } from 'react-router-dom'
import { DarkModeContext } from './darkModeProvider'
import { HiOutlineSun } from 'react-icons/hi2'


const Header = () => {
    const { IsDark, toggleDarkMode } = useContext(DarkModeContext)
    const navigate = useNavigate()
    return (
        <div>
            <div className='flex justify-between py-4 px-[6rem] shadow-md mb-8 dark:bg-Blue bg-white mobile:px-2 tablet:px-4 largeTablet:px-6 fixed top-0 left-0 mx-auto w-full'>
                <h3 className='font-semibold text-lg cursor-pointer' onClick={() => navigate('/')}>Where in the world?</h3>
                <button onClick={toggleDarkMode}>
                    {IsDark ? <LuMoonStar className='w-[1.4rem] h-[1.4rem] inline-block align-bottom' /> : <HiOutlineSun className='w-[1.4rem] h-[1.4rem] inline-block align-bottom' />}
                    <span className='inline-block ml-2'>{IsDark ? 'Dark Mode' : 'Light Mode'}</span>
                </button>
            </div>
            <main className='mt-[6rem]  px-[6rem] tablet:px-6 largeTablet:px-6'>
                <Outlet />
            </main>
        </div>
    )
}

export default Header