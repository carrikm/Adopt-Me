import useState from "react";
import Results from "./Results";
import useBreedList from "./useBreedList";
import {useQuery} from "@tanstack/react-query";
import fetchSearch from "./fetchSearch";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
    //Set up our state hooks
    //This is equivalent to the following:
    //let locationHook = useState("");
    //let location = locationHook[0];
    //let setLocation = locationHook[1];
    let [requestParams, setRequestParams] = useState({
        location: "",
        animal: "",
        breed: ""
    });
    let [animal, setAnimal] = useState("");
    let [breeds] = useBreedList(animal);

    const results = useQuery(["search", requestParams], fetchSearch);
    const pets = results?.data?.pets ?? [];

    return (
        <div className="search-params">
            <form onSubmit={e => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const obj = {
                    animal: formData.get("animal") ?? "",
                    breed: formData.get("breed") ?? "",
                    location: formData.get("location") ?? ""
                };
                setRequestParams(obj);
            }}>
                <label htmlFor="location">
                    Location
                    <input 
                        id="location" 
                        name="location"
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
                        name="breed"
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