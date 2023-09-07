import React, {useState, useEffect} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry"
import "./App.css";
import {offlineInfo} from "../info.js"


function App() {
    const [info, setInfo] = useState([])
    const [searchfield, setSearchfield] = useState("")
    const [usersTimedOut, setUsersTimedOut] = useState(false)

    useEffect(() => {
        let newInfo = []
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => {
                setInfo(users);
                newInfo = users
            })

        setTimeout(() => {
            if (newInfo.length === 0) {
                setUsersTimedOut(true)
                setTimeout(() => {
                    setInfo(offlineInfo)
                }, 1500)
            }
        }, 4000)
    }, [])

    const handleSearch = (event) => {
        setSearchfield(event.target.value)
    }
    
    const filteredCats = info.filter(catInfo => {
        return catInfo.username.toLowerCase().includes(searchfield.toLowerCase())
    })

    return (
            <div className="tc">
                <h1 className="f1">React Search</h1>
                <SearchBox searchChange={handleSearch}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList info={filteredCats} usersTimedOut={usersTimedOut}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
}

export default App;