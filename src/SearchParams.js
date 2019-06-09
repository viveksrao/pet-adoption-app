import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import Results from './Results';
import useDropdown from './useDropdown';


const SearchParams = () => {
  const [location, setLocation] = useState("San Francisco, CA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "Dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });
    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed("");
    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      const breedStrings = apiBreeds.map(({ name }) => name);
      setBreeds(breedStrings);
      // eslint-disable-next-line no-console
    }, console.error);
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="row">
      <div className="col-4">
        <form onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input type="text" className="form-control" id="location" value={location} placeholder="Location" onChange={e => setLocation(e.target.value)} />
          </div>
          <AnimalDropdown />
          <BreedDropdown />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      <div className="col-8">
        <Results pets={pets} />
      </div>
    </div>
  );
}

export default SearchParams;