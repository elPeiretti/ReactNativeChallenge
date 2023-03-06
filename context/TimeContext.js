import React, { createContext, useState } from "react";

export const TimeContext = createContext(null);

export const ContextProvider = ({children}) => {
    
    const [timeInSeconds, setTimeInSecods] = useState(0);

    const setTime = (seconds) => {
        setTimeInSecods(seconds);
    }

    const updateTime = () => {
        setTimeInSecods(timeInSeconds+1);
    }

    return (
        <TimeContext.Provider value={{time: timeInSeconds, setter: setTime, increment: updateTime}}>
            {children}
        </TimeContext.Provider>
    );
}