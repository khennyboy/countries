import { useQuery } from "@tanstack/react-query";
import getCountryDetail from "./countryDetailApi";

export const useCountryDetail = () => {
    const path = window.location.pathname.split('/').at(-1)
    const search = decodeURIComponent(path);

    const { isLoading, data: { country, allCountry } = {} } = useQuery({
        queryKey: ['countries', search],
        queryFn: () => getCountryDetail(search),
    });

    return { isLoading, country, allCountry }
}
