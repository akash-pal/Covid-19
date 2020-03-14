import useStats from '../utils/useState';
import { useState } from 'react';
import Stats from './Stats';

export default function CountrySelector({ url }) {
    const [selectedCountry, setSelectedCountry] = useState('USA');
    const {stats, loading, error} = useStats(url);
    if(loading) return <p>Loading ...</p>;
    if(error) return <p>Error...</p>;
    return (
        <div>
            <h2>Showing {selectedCountry}</h2>
            <select
                onChange={(e) =>
                setSelectedCountry(e.target.value)}>
                {Object.entries(stats.countries).map(([country, code]) => (
                    <option 
                        selected={selectedCountry === stats.iso3[code]}
                        key={code} 
                        value={stats.iso3[code]}>
                        {country}
                    </option>
                ))}
            </select>
            <Stats url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}></Stats>
        </div>
    )
}