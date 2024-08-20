import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import DetailJobSkeleton from './detailCountrySkeleton'
import { useCountryDetail } from './useCountryDetail'
import NumberWithCommas from './fomatNumber'
import { useNavigate } from 'react-router-dom'

const CountryDetail = () => {
    const { isLoading, country = [], allCountry } = useCountryDetail()
    let selectedCountry = country?.[0] ?? {}

    const navigate = useNavigate()

    const getBorderCountryNames = (borders, allCountries) => {
        return borders?.map(borderCode => {
            const country = allCountries.find(c => c.alpha3Code === borderCode);
            return country ? country.name : borderCode;
        });
    };
    const borderNames = getBorderCountryNames(selectedCountry.borders, allCountry)

    if (isLoading) return (
        <DetailJobSkeleton />
    )

    return (
        <div className='py-12'>
            <div onClick={() => navigate(-1)} className='mb-12 bg-white dark:bg-Blue py-2 px-8 shadow-md w-fit rounded-[4px] cursor-pointer'>
                <BsArrowLeft className='inline-block mr-1 align-middle' /> Back
            </div>
            <div className='flex gap-16 items-center tablet:flex-col tablet:items-start'>
                <img src={selectedCountry.flags.png} alt="countrylogo" loading='lazy' className='w-2/5 object-contain tablet:w-[70%] tablet:aspect-video mobile:w-full shadow-md rounded-[5px]' />
                <div>
                    <h3 className='font-bold text-lg mb-4'>{selectedCountry.name}</h3>
                    <div className='flex gap-12 tablet:flex-col'>
                        <div className='*:py-1'>
                            <p><span>Native Name:</span><span className='opacity-70 indent-2 inline-block'>{selectedCountry.nativeName}</span></p>
                            <p><span>Population:</span><span className='opacity-70 indent-2 inline-block'>{NumberWithCommas(selectedCountry.population)}</span></p>
                            <p><span>Region:</span><span className='opacity-70 indent-2 inline-block'>{selectedCountry.region}</span></p>
                            <p><span>Sub Region:</span ><span className='opacity-70 indent-2 inline-block'>{selectedCountry.subregion}</span></p>
                            <p><span>Capital:</span><span className='opacity-70 indent-2 inline-block'>{selectedCountry.capital}</span></p>
                        </div>
                        <div className='*:p-1'>
                            <p><span>Top level Domain:</span><span className='opacity-70 indent-2 inline-block'>{selectedCountry.topLevelDomain?.[0]}</span></p>
                            <p><span>Currencies:</span><span className='opacity-70 indent-2 inline-block'>{selectedCountry.currencies?.[0].code}</span></p>
                            <p><span>Languages:</span><span className='opacity-70 indent-2 inline-block'>{selectedCountry.languages?.map((language) => (
                                <>
                                    {language.iso639_1}, {language.iso639_2}, {language.name}
                                </>
                            ))}</span></p>
                        </div>
                    </div>
                    <div className='mt-8 '>
                        <div className='flex gap-3 flex-wrap items-center'>
                            <h3>Border Countries:</h3>
                            {
                                borderNames?.map((eachBorderCountry, index) => (
                                    <span key={index}
                                        onClick={() => navigate(`/country/${eachBorderCountry}`)}
                                        className='cursor-pointer opacity-70 shadow-md bg-white dark:bg-Blue px-2 py-1'
                                    > {eachBorderCountry}</span>

                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CountryDetail