import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import ThunkMiddleware from 'redux-thunk';

import App from "../containers/App";
import { searchCats, requestCats } from '../reducers';


const rootReducer = combineReducers({ searchCats, requestCats});
const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware));

test("see if app", () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );

    const search = screen.getByPlaceholderText("search cats")
    fireEvent.input(search, {target: {value: "e"}})

    expect(search.value).toBe("e")
})