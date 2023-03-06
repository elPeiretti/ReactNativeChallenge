import React, { createContext, useState } from "react";

export const TimeContext = createContext(null);

export const ContextProvider = ({children}) => {
    
    const [timeInSeconds, setTimeInSecods] = useState(0);

    return (
        <TimeContext.Provider value={{time: timeInSeconds}}>
            {children}
        </TimeContext.Provider>
    );
}