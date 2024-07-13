import App from "./App";
import { MovieSection } from "./componets/renderComponents/MovieSection";

export interface Route {
    path: string;
    element: JSX.Element;
  }
  

export const Routes : Array<Route> = [
    { 
        path: "/",
        element: <App/>
    },
    {
        path: "/movie/:id",
        element: <main>
            <MovieSection/>
        </main> 
    }
]

