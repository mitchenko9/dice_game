import React, { useState, useContext, ReactNode } from 'react';
import { useLocalStorage } from '../castomHooks/useLocalStorage';

type SaveSettingsProviderProps = {
    children: ReactNode,
}

type ContextProps = {
    isSaveSettings: boolean,
    setIsSaveSettings: React.Dispatch<React.SetStateAction<boolean>>,
}

const SaveSettingsContext = React.createContext<ContextProps | null>(null);

export const useSaveSettingsContext = () => useContext(SaveSettingsContext);

export const SaveSettingsProvider = ({children}: SaveSettingsProviderProps) => {
    const {
        value: isSaveSettings,
        setValue: setIsSaveSettings,
    } = useLocalStorage(false, 'isSave');

    return (
        <SaveSettingsContext.Provider value={{
            isSaveSettings,
            setIsSaveSettings,
        }}>
            {children}
        </SaveSettingsContext.Provider>
    )
}