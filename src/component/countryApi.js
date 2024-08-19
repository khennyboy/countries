import allCountry from '../data/data.json'

export default async function getCountry({ page, continent, search }) {
    const start = (page - 1) * 10;
    const end = page * 10;
    let countries;
    console.log(search)

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
        else {
            countries = allCountry;
        }

        return {
            totalCountry: countries.length,
            loadCountry: search !== '' ? countries : countries.slice(start, end),
        };
    } catch (error) {
        console.error(error);
        throw error;
    }
}

