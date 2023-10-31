import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

export default function useBreedList(animal){
    const results = useQuery(["breeds", animal], fetchBreedList);

    //return empty array if missing any of the information from results, data, or breeds
    // otherwise, return results status
    return [results?.data?.breeds ?? [], results.status];
}