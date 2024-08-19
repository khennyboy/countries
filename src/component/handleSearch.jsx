import { useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'

const HandleSearch = () => {
    const searchRef = useRef();
    let [searchParams, setSearchParams] = useSearchParams();

    const debounce = (fn, delay) => {
        let timeoutID;
        return function (args) {
            if (timeoutID) {
                clearTimeout(timeoutID);
            }
            timeoutID = setTimeout(() => {
                fn(args);
            }, delay);
        };
    };


    useEffect(() => {
        let searchInput = searchRef.current;

        const handleClick = (e) => {
            if (searchRef.current) {
                let value = e.target.value;
                searchParams.set('search', value);
                setSearchParams(searchParams);
            }
        };

        const debouncedHandleClick = debounce(handleClick, 1000);

        searchInput.addEventListener("input", debouncedHandleClick);

        return () => {
            searchInput.removeEventListener("input", debouncedHandleClick);
        };
    }, [searchParams, setSearchParams]);

    return searchRef;
};

export default HandleSearch;


