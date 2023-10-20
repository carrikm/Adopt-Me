import ReactDOM from "react-dom";
import Pet from "./Pet"

//Always capitalize component names
const App = () => {
    return (
        <div>
            <h1>Adopt Me!</h1>
            <Pet name="Ezra" animal="Dog" breed="Doberman" />
            <Pet name="Happy" animal="Cat" breed="Unknown" />
            <Pet name="Dutch" animal="Dog" breed="Doberman" />
        </div>
    );
};

const container = document.getElementById('root'); //grab root element
const root = ReactDOM.createRoot(container); //point to it with the virtual DOM
//const root = ReactDOM.render(container, <App />); //This works the same as the above line, but above is preferable for anything React 18+
root.render(<App />); //tell the DOM to render the component called App