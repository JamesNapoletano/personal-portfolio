import React, { useState } from "react";

const defaultState = {
    accentColor: 'blue',
    updateAccentColor: (accentColor) => { },
};

export const AccentColorContext = React.createContext(defaultState);

export const AccentColorContextProvider = (props) => {
    const [accentColor, setAccentColor] = useState(defaultState.accentColor);

    const updateAccentColor = (accentColor) => {
        return setAccentColor(accentColor);
    }

    return (
        <AccentColorContext.Provider
            value={{
                accentColor,
                updateAccentColor,
            }}
        >
            {props.children}
        </AccentColorContext.Provider>
    )
}