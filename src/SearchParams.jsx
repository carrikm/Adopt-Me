import { useState } from "react";

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
    let breeds = []; //empty array to hold breeds when we get the list from API later

    return (
        <div className="search-params">
            <form>
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
        </div>
    );
}

export default SearchParams;