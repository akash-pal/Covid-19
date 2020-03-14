import {useState, useEffect} from 'react';

export default function useStats(url) {
    const [stats, setStats] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const data = await fetch(url).then(
                data => data.json()
            ).then(data => {
                if(data.error) {
                    setError(data.error.message);
                }
                else{
                    setError(false);
                    return data;
                }
            })
            .catch(err => {
                setLoading(false);
                setError(err);
            })
            setStats(data);
            setLoading(false);
        }
        fetchData();
    }, [url])
    return {
        stats,
        loading,
        error
    };
}