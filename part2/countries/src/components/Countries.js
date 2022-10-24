import React from 'react';
import CountryFull from './CountryFull';

export default function Countries({countries, setShown, setFilterName}) {
    const clickShow = (country) => {
        setFilterName('')
        setShown([country])
    }

    if (countries.length > 10) {
        return (<div>Too many matches, specify another filter</div>)
    } else if (countries.length > 1) {
        return (
            <ul>
                {countries.map(country => <li key={country.name.common}>{country.name.common} <button onClick={() => clickShow(country)}>show</button></li>)}
            </ul>
            )
    } else if (countries.length == 1) {
        return <CountryFull name={countries[0].name.common} capital={countries[0].capital[0]} area={countries[0].area} languages={Object.values(countries[0].languages)} flag={countries[0].flags.png}/>
    } else {
        return <></>
    }
}