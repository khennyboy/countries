import allCountry from '../data/data.json'

export default async function getCountryDetail(search) {

    let country;
    try {
        // Delay the promise manually
        await new Promise((res) => setTimeout(res, 2000));
        country = allCountry.filter((country) => country.name === search)
        return {
            country: country,
            allCountry: allCountry
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

