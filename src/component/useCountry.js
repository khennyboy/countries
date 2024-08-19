import { useQuery, useQueryClient } from "@tanstack/react-query";
import getCoutry from "./countryApi";
import { useSearchParams } from "react-router-dom";

export const useCountry = () => {
    let [searchParams] = useSearchParams()
    const queryClient = useQueryClient()
    // handle pages
    const page = !searchParams.get('page') ? 1 : +searchParams.get('page')
    // handle continent filter
    const continent = !searchParams.get('continent') ? 'all' : searchParams.get('continent')
    // handle search button
    const search = !searchParams.get('search') ? '' : searchParams.get('search')

    const { isLoading, data: countries } = useQuery({
        queryKey: ['countries', page, continent, search],
        queryFn: () => getCoutry({ page, continent, search }),
    });

    const totalCountry = countries?.totalCountry
    const pageCount = Math.ceil(totalCountry / 10)

    if (page < pageCount) {
        queryClient.prefetchQuery({
            queryKey: ['bookings', page + 1, continent, search],
            queryFn: () => getCoutry({ page: page + 1, continent, search })
        })
    }

    if (page > 1) {
        queryClient.prefetchQuery({
            queryKey: ['bookings', page - 1, continent, search],
            queryFn: () => getCoutry({ page: page - 1, continent, search })
        })
    }
    return { isLoading, countries }
}
