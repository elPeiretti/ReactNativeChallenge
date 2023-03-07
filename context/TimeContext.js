import React, { createContext, useState } from "react";

export const TimeContext = createContext(null);

export const ContextProvider = ({children}) => {
    
    const [timeInSeconds, setTimeInSecods] = useState(0);

    const setTime = (seconds) => {
        setTimeInSecods(seconds);
    }

    const incrementTime = () => {
        setTimeInSecods(timeInSeconds+1);
    }

    const decrementTime = () => {
        setTimeInSecods(timeInSeconds-1);
    }

    return (
        <TimeContext.Provider value={{
            time: timeInSeconds,
            setter: setTime, 
            increment: incrementTime,
            decrement: decrementTime}}>
            {children}
        </TimeContext.Provider>
    );
}