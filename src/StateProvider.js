import React, { createContext, useContext, useReducer } from 'react'

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {/* Here children is the app component */}
        {children}
    </StateContext.Provider>
);

// used to fetch data from the data layer
export const useStateValue = () => useContext(StateContext)