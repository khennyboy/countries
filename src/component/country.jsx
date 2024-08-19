import React from 'react'
import { useNavigate } from 'react-router-dom'
import JobSkeleton from './contentLoader'
import NumberWithCommas from './fomatNumber'
import Pagination from './pagination'
import { useCountry } from './useCountry'

const Country = () => {
    const navigate = useNavigate()
    const { isLoading, countries: { totalCountry, loadCountry } = {} } = useCountry()
    if (isLoading) return (
        <div className='grid grid-cols-4 gap-8 largeTablet:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 tablet:gap-8 mb-8'>
            {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className='cursor-pointer'>
                    <JobSkeleton />
                </div>
            ))}
        </div>
    )
    return (
        <div>
            <div className='grid grid-cols-4 gap-16 largeTablet:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 tablet:gap-8 mb-8'>
                {loadCountry
                    ?.map((eachCountry, index) => (
                        <div key={index} className='cursor-pointer shadow-md rounded-[5px] pb-4 bg-white dark:bg-Blue'
                            onClick={() => navigate(`/country/${eachCountry.name}`)}>
                            <img src={eachCountry.flags.png} alt="country Flag" loading='lazy' className='h-[200px] w-full object-cover rounded-tr-[5px] rounded-tl-[5px]' />
                            <div className='pl-6 mt-4 *:py-1'>
                                <h3 className='font-bold text-lg mb-2'>{eachCountry.name}</h3>
                                <p><span className='font-semibold'>Population:</span><span className='indent-4 inline-block opacity-70'>{NumberWithCommas(eachCountry.population)}</span></p>
                                <p><span className='font-semibold'>Region:</span><span className='indent-4 inline-block opacity-70'>{eachCountry.region}</span></p>
                                <p><span className='font-semibold'>Capital:</span><span className='indent-4 inline-block opacity-70'>{eachCountry.capital}</span></p>
                            </div>
                        </div>
                    ))}
            </div>
            <div className='my-8 flex justify-between items-center'>
                <Pagination count={totalCountry} />
            </div>
        </div>
    )
}

export default Country