import { useState, useEffect } from "react";

const useFetch = (endpointUrl) => {
    const [records, setRecords] = useState([]); // data: blogs.csv using useEffect hook
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        setTimeout(() => {
            fetch(endpointUrl)
                .then((response) => {
                    if (!response.ok) {
                        throw Error(
                            "could not fetch the data for the resource"
                        );
                    }

                    return response.json();
                })
                .then((data) => {
                    setError("");
                    setIsLoading(false);
                    setRecords(data);
                })
                .catch((err) => {
                    setError(err.message);
                    setIsLoading(false);
                });
        }, 3000);
    }, []); // dependency array

    return { records, isLoading, error };
};

export default useFetch;
