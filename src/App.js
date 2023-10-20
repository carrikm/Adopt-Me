const Pet = (props) => {
    return React.createElement(
        "div", 
        {}, 
        [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed)
        ]
    )
};

//Always capitalize component names
const App = () => {
    return React.createElement(
        "div", //tag to be created
        {}, //attributes go in here, or an empty object/null
        [
        React.createElement("h1", {}, "Adopt Me!"), //items inside the created tag
        React.createElement(Pet, {name: "Ezra", animal: "Dog", breed: "Doberman"}),
        React.createElement(Pet, {name: "Happy", animal: "Cat", breed: "Unknown"}),
        React.createElement(Pet, {name: "Dutch", animal: "Dog", breed: "Doberman"})
        ]
    )
};

const container = document.getElementById('root'); //grab root element
const root = ReactDOM.createRoot(container); //point to it with the virtual DOM
//const root = ReactDOM.render(container, <App />); //This works the same as the above line, but above is preferable for anything React 18+
root.render(React.createElement(App)); //tell the DOM to render the component called App