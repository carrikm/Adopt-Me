import {createRoot} from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity
        }
    }
});

//Always capitalize component names
const App = () => {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <header>
                    <Link to="/">Adopt Me!</Link>
                </header>

                <Routes>
                    <Route path="/details/:id" element={<Details />} />
                    <Route path="/" element={<SearchParams />} />
                </Routes>
            </QueryClientProvider>
        </BrowserRouter>
    );
};

const container = document.getElementById('root'); //grab root element
const root = createRoot(container); //point to it with the virtual DOM
//const root = ReactDOM.render(container, <App />); //This works the same as the above line, but above is preferable for anything React 18+
root.render(<App />); //tell the DOM to render the component called App