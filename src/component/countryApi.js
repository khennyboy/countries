import allCountry from '../data/data.json'

export default async function getCountry({ page, continent }) {
    const start = (page - 1) * 10;
    const end = page * 10;
    let countries;

    try {
        // Delay the promise manually
        if (page === 1) {
            await new Promise((res) => setTimeout(res, 2000));
        }

        if (continent !== 'all') {
            countries = allCountry.filter((country) => country.region === continent);
        } else {
            countries = allCountry;
        }

        return {
            totalCountry: countries.length,
            loadCountry: countries.slice(start, end),
        };
    } catch (error) {
        console.error(error);
        throw error;
    }
}

