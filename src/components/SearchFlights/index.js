import './index.scss';
import { useState } from 'react'
import UserInput from '../UserInput'
import ListOfFlight from '../ListOfFlight'

function Index() {
    const [searchQuery, setSearchQuery] = useState({})
    const getQueryForSearch = (payload) => {
        setSearchQuery(payload)
    }
    return (
        <div className="App">
            <h1 className="App__title">Search for the best flight available</h1>
            <UserInput setQueryForSearch={getQueryForSearch} />
            <ListOfFlight queryForSearch={searchQuery} />
        </div>
    );
}

export default Index;
