import allCountry from '../data/data.json'

export default async function getCountry({ page, continent, search }) {
    const start = (page - 1) * 10;
    const end = page * 10;
    let countries = allCountry;

    try {
        // Delay the promise manually
        if (page === 1) {
            await new Promise((res) => setTimeout(res, 2000));
        }

        if (continent !== 'all') {
            countries = allCountry.filter((country) => country.region === continent);
        }
        if (search !== '') {
            countries = allCountry.filter((country) => country.name.toLowerCase() === search.toLowerCase())
        }


        return {
            allData: allCountry,
            totalCountry: countries.length,
            loadCountry: search === '' ? countries.slice(start, end) : countries
        };
    } catch (error) {
        console.error(error);
        throw error;
    }
}

