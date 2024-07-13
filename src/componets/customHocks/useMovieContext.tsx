import { useContext } from "react";
import { movieContext, movieContextType } from "../MovieContext";

export const useMovieContext = (): movieContextType => {
    const context = useContext(movieContext);
    if (!context) {
        throw new Error('useMovie must be used within a MovieProvider');
    }
    return context;
};