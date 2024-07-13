import React, { ReactNode, createContext, useState } from "react";


export interface movieContextType {
    id: number;
    setID: React.Dispatch<React.SetStateAction<number>>;
}

export const movieContext = createContext<movieContextType | undefined>(undefined);

interface MovieProviderProps {
    children: ReactNode;
}

export const MovieProvider: React.FC<MovieProviderProps> = ({ children }) => {

    const [id, setID] = useState<number>(0)

    return (
        <movieContext.Provider value={{ id, setID }}>
            {children}
        </movieContext.Provider>
    )
}