import React, { useState, useEffect } from 'react'
import Container from '../Container'
import './index.scss'

function Index({ queryForSearch }) {
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [ListOfFlights, setListOfFlights] = useState([])

    const getDataFromApi = async () => {
        const _url = "http://nmflightapi.azurewebsites.net/api/flight"
        setIsLoading(true)
        await fetch(_url)
            .then(response => {
                if (response.status >= 200 && response.status <= 299) {
                    return response.json()
                }
                else {
                    setIsLoading(false)
                    setIsError(true)
                    throw new Error(response.statusText)
                }
            })
            .then(data => {
                console.log(data)
                setListOfFlights(data)
                setIsLoading(false)
            })
            .catch(error => setIsError(error))
    }

    const pad = (d) => {
        return (d < 10) ? '0' + d.toString() : d.toString();
    }

    useEffect(() => {
        getDataFromApi();
        console.log(queryForSearch)
    }, [queryForSearch])

    return (
        <div className="ListOfFlight">
            <Container>
                <div className="ListOfFlight__wrapper">
                    <table>
                        <thead>
                            <tr>
                                <td>Serial No.</td>
                                <th>Airline</th>
                                <th>Duration (Inbound)</th>
                                <th>Duration (Outbound)</th>
                                <th>No. of Stops</th>
                                <th>Cost</th>
                            </tr>
                        </thead>

                        <tbody>
                            {ListOfFlights.map((flight, index) => (
                                index < 10 && (
                                    <tr className="ListOfFlight__flight" key={index}>
                                        <td>{pad(index + 1)}</td>
                                        <td>
                                            <div className="airplaneName">
                                                <img src={flight.AirlineLogoAddress} alt={flight.AirlineName} />
                                                <span>{flight.AirlineName}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="inboundDuration">
                                                {flight.InboundFlightsDuration}
                                            </div>
                                        </td>
                                        <td>
                                            <div className="outboundDuration">
                                                {flight.OutboundFlightsDuration}
                                            </div>
                                        </td>
                                        <td>
                                            <div className="stops">
                                                {flight.Stops}
                                            </div>
                                        </td>
                                        <td>
                                            <div className="cost">
                                                {flight.TotalAmount}
                                            </div>
                                        </td>
                                    </tr>
                                )))}
                        </tbody>
                    </table>
                </div>
            </Container>
        </div>
    )
}

export default Index
