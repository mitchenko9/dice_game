import React, { useContext, ReactNode } from 'react';
import { useLocalStorage } from '../castomHooks/useLocalStorage';
import { 
    createEdgesList,
    IEdgs,
} from '../lib/edgesList';

type DiceEdgesProviderProps = {
    children: ReactNode,
}

type ContextProps = {
    edges: IEdgs[],
    setEdges: React.Dispatch<React.SetStateAction<IEdgs[]>>,
}

const DiceEdgesContext = React.createContext<ContextProps | null>(null);

export const useDiceEdgesContext = () => useContext(DiceEdgesContext);

export const DiceEdgesProvider = ({children}: DiceEdgesProviderProps) => {
    const {
        value: edges,
        setValue: setEdges,
    } = useLocalStorage<IEdgs[]>(createEdgesList(), 'edges');

    return (
        <DiceEdgesContext.Provider value={{
            edges,
            setEdges,
        }}>
            {children}
        </DiceEdgesContext.Provider>
    )
}