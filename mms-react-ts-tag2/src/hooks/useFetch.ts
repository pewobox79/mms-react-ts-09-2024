import { useEffect, useState } from "react"

export function useFetch(url: string) {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)


    useEffect(() => {

        async function fetchData() {

            try {

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error("Network issues - no response")
                }

                const json = await response.json()
                setData(json)


            } catch (err) {
                setError(err)

            } finally {
                setIsLoading(false)
            }

        }

        fetchData()


    }, [])

    return { data, isLoading, error }
}