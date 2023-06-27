import { useState, useEffect } from "react";
import { 
    createEdgesList,
    IEdgs,
} from '../lib/edgesList';

export function useLocalStorage<I>(initVal: I, key: string) {
    const getValue = (): I => {
        const storage = localStorage.getItem(key);

        if (storage) return JSON.parse(storage);
        
        return initVal;
    }

    const [value, setValue] = useState(getValue);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return {value, setValue};
}