import {createRoot} from "react-dom/client";
import SearchParams from "./SearchParams";

//Always capitalize component names
const App = () => {
    return (
        <div>
            <h1>Adopt Me!</h1>
            <SearchParams />
        </div>
    );
};

const container = document.getElementById('root'); //grab root element
const root = createRoot(container); //point to it with the virtual DOM
//const root = ReactDOM.render(container, <App />); //This works the same as the above line, but above is preferable for anything React 18+
root.render(<App />); //tell the DOM to render the component called App