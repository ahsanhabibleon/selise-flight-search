import React, { useState } from 'react'
import Container from '../Container'
import './index.scss'

function Index({ setQueryForSearch }) {
    const initialQuery = {
        DepartureAirportCode: '',
        ArrivalAirportCode: '',
        DepartureDate: '',
        ReturnDate: ''
    }

    const [query, setQuery] = useState(initialQuery)

    const handleSubmit = (e) => {
        e.preventDefault();
        setQueryForSearch(query)
    }

    const updateQuery = (e) => {
        e.target.name === "DepartureAirportCode" && (
            setQuery({
                ...query,
                DepartureAirportCode: e.target.value
            })
        )

        e.target.name === "ArrivalAirportCode" && (
            setQuery({
                ...query,
                ArrivalAirportCode: e.target.value
            })
        )
        e.target.name === "DepartureDate" && (
            setQuery({
                ...query,
                DepartureDate: e.target.value
            })
        )
        e.target.name === "ReturnDate" && (
            setQuery({
                ...query,
                ReturnDate: e.target.value
            })
        )
    }

    return (
        <div className="UserInput">
            <Container>
                <form className="UserInput__form" onSubmit={handleSubmit} autoComplete="false">
                    <div className="inputWrapper">
                        <label htmlFor="DepartureAirportCode" className="srOnly">Departure Airport Code</label>
                        <input type="text" name="DepartureAirportCode" id="DepartureAirportCode" placeholder="Departure Airport Code" maxLength="3" onChange={(e) => updateQuery(e)} />
                    </div>

                    <div className="inputWrapper">
                        <label htmlFor="ArrivalAirportCode" className="srOnly">Arrival Airport Code</label>
                        <input type="text" name="ArrivalAirportCode" id="ArrivalAirportCode" placeholder="Arrival Airport Code" maxLength="3" onChange={(e) => updateQuery(e)} />
                    </div>

                    <div className="inputWrapper">
                        <label htmlFor="DepartureDate" className="srOnly">Departure Date</label>
                        <input type="date" name="DepartureDate" id="DepartureDate" placeholder="Departure Date" onChange={(e) => updateQuery(e)} />
                    </div>

                    <div className="inputWrapper">
                        <label htmlFor="ReturnDate" className="srOnly">Return Date</label>
                        <input type="date" name="ReturnDate" id="ReturnDate" placeholder="Return Date" onChange={(e) => updateQuery(e)} />
                    </div>
                    <button className="primaryBtn">
                        Search Flights
                    </button>
                </form>
            </Container>
        </div>
    )
}

export default Index
