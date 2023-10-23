import { useState, useEffect } from "react";
import Results from "./Results";
import useBreedList from "./useBreedList";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
    //Set up our state hooks
    //This is equivalent to the following:
    //let locationHook = useState("");
    //let location = locationHook[0];
    //let setLocation = locationHook[1];
    let [location, setLocation] = useState("");
    let [animal, setAnimal] = useState("");
    let [breed, setBreed] = useState("");
    let [pets, setPets] = useState([]);
    let [breeds] = useBreedList(animal);

    //every time we re-render the component, go run this effect to get info from the API
    useEffect(() => {
        requestPets();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    //make an API call to retrieve pet info and put it into pets array
    async function requestPets(){
        const res = await fetch(
            `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );

        const json = await res.json();

        setPets(json.pets);
    }

    return (
        <div className="search-params">
            <form onSubmit={e => {
                e.preventDefault();
                requestPets();
            }}>
                <label htmlFor="location">
                    Location
                    <input 
                        id="location" 
                        onChange={(e) => setLocation(e.target.value)}
                        value={location} 
                        placeholder="Location" 
                    />
                </label>

                <label htmlFor="animal">
                    Animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={ (e) => {
                            setAnimal(e.target.value);
                            setBreed(""); 
                        }}
                        placeholder="Animal"
                    >
                        <option />
                        {ANIMALS.map((animal) => (
                            <option key={animal}>
                                {animal}
                            </option>
                        ))}    
                    </select>
                </label>

                <label htmlFor="breed">
                    Breed
                    <select
                        disabled={!breeds.length}
                        id="breed"
                        value={breed}
                        onChange={(e) => setBreed(e.target.value)}
                        onBlur={(e) => setBreed(e.target.value)}
                    >
                        <option />
                        {breeds.map((breed) => (
                            <option key={breed} value={breed}>
                            {breed}
                            </option>
                        ))}
                    </select>
                </label>

                <button>Submit</button>
            </form>
                <Results pets={pets} />
        </div>
    );
}

export default SearchParams;