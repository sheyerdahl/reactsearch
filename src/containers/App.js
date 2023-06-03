import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry"
import "./App.css";
import {offlineInfo} from "../info.js"


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            info: [],
            searchfield: "",
            usersTimedOut: false,
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => this.setState({info: users}))
        setTimeout(() => {
            if (this.state.info.length === 0) {
                this.setState({usersTimedOut: true})
                setTimeout(() => {
                    this.setState({info: offlineInfo})
                }, 1500)
            }
        }, 4000)
    }

    handleSearch = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const {info, searchfield, usersTimedOut} = this.state;
        const filteredCats = info.filter(catInfo => {
            return catInfo.username.toLowerCase().includes(searchfield.toLowerCase())
        })
        return (
                <div className="tc">
                    <h1 className="f1">React Search</h1>
                    <SearchBox searchChange={this.handleSearch}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList info={filteredCats} usersTimedOut={usersTimedOut}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }
}

export default App;