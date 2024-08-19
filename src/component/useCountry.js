import { useQuery, useQueryClient } from "@tanstack/react-query";
import getCoutry from "./countryApi";
import { useSearchParams } from "react-router-dom";

export const useCountry = () => {
    let [searchParams] = useSearchParams()
    const queryClient = useQueryClient()
    const page = !searchParams.get('page') ? 1 : +searchParams.get('page')
    const continent = !searchParams.get('continent') ? 'all' : searchParams.get('continent')

    const { isLoading, data: countries, error, isError } = useQuery({
        queryKey: ['countries', page, continent],
        queryFn: () => getCoutry({ page, continent }),
    });

    const totalCountry = countries?.totalCountry
    const pageCount = Math.ceil(totalCountry / 10)

    if (page < pageCount) {
        queryClient.prefetchQuery({
            queryKey: ['bookings', page + 1, continent],
            queryFn: () => getCoutry({ page: page + 1, continent })
        })
    }

    if (page > 1) {
        queryClient.prefetchQuery({
            queryKey: ['bookings', page - 1, continent],
            queryFn: () => getCoutry({ page: page - 1, continent })
        })
    }
    return { isLoading, countries, error, isError }
}
