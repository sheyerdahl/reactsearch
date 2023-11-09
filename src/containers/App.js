// import React, {useState, useEffect} from "react";
import React, { useEffect} from "react";
import { connect } from "react-redux";
import "./App.css";

import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import Header from "../components/Header";
import CounterButton from "../components/CounterButton";
//import {offlineInfo} from "../info.js";

import { setSearchField, requestCats } from "../actions";

const mapStateToProps = state => {
    return {
        searchField: state.searchCats.searchField,
        cats: state.requestCats.cats,
        isPending: state.requestCats.isPending,
        error: state.requestCats.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSearch: (event) => dispatch(setSearchField(event.target.value)),
        handleRequestCats: () => dispatch(requestCats)
    }
}

function App(store) {
    // const [info, setInfo] = useState([])
    // const [searchfield, setSearchfield] = useState("")
    // const [usersTimedOut, setUsersTimedOut] = useState(false)

    const { searchField, cats, handleSearch, handleRequestCats } = store

    useEffect(() => {
        handleRequestCats();

        // let newInfo = []
        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then(response => response.json())
        //     .then(users => {
        //         setInfo(users);
        //         newInfo = users
        //     })

        // setTimeout(() => {
        //     if (newInfo.length === 0) {
        //         setUsersTimedOut(true)
        //         setTimeout(() => {
        //             setInfo(offlineInfo)
        //         }, 1500)
        //     }
        // }, 4000)
    }, [handleRequestCats])

    // const handleSearch = (event) => {
    //     setSearchfield(event.target.value)
    // }

    const filteredCats = cats.filter(catInfo => {
        return catInfo.username.toLowerCase().includes(searchField.toLowerCase())
    })

    return (
            <div className="tc">
                <Header />
                <CounterButton color={"red"}/>
                <SearchBox searchChange={handleSearch}/>
                <Scroll>
                    <ErrorBoundry>
                        {/* <CardList info={filteredCats} usersTimedOut={usersTimedOut}/> */}
                        <CardList info={filteredCats}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);