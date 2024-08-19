import { useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'

const HandleSearch = () => {
    const searchRef = useRef()
    let [searchParams, setSearchParams] = useSearchParams()

    let debounce = (fn, delay) => {
        console.log(delay, fn)
        let timeoutID;
        return function () {
            if (timeoutID) {
                clearTimeout(timeoutID)
            }
            timeoutID = setTimeout((e) => {
                fn(e)
            }, delay)
        }
    }

    useEffect(() => {
        let seacrchInput = searchRef.current
        function handleClick(e) {
            if (searchRef.current) {
                let value = e.target.value
                console.log(value)
                searchParams.set('search', value)
                setSearchParams(searchParams)
            }
        }
        seacrchInput.addEventListener("input", debounce((e) => handleClick(e), 2000))

        return () => seacrchInput.removeEventListener("click", handleClick)
    }, [searchParams, setSearchParams]);

    return searchRef;
}
export default HandleSearch


// import { useEffect, useRef } from 'react'
// import { useSearchParams } from 'react-router-dom'

// const HandleSearch = () => {
//     const searchRef = useRef()
//     let [searchParams, setSearchParams] = useSearchParams()


//     // useEffect(() => {
//     let seacrchInput = searchRef.current
//     function handleClick(e) {
//         if (searchRef.current) {
//             let value = e.target.value
//             console.log(value)
//             searchParams.set('search', value)
//             setSearchParams(searchParams)
//         }
//     }
//     seacrchInput?.addEventListener("input", handleClick)

//     //     return () => seacrchInput.removeEventListener("click", handleClick)
//     // }, [searchParams, setSearchParams]);

//     return searchRef;
// }
// export default HandleSearch