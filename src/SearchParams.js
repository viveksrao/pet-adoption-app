import React, { useState, useEffect, useContext } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import Results from './Results';
import useDropdown from './useDropdown';
import ThemeContext from './ThemeContext';


const SearchParams = () => {
  const [location, setLocation] = useState("San Francisco, CA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "Dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);
  const [theme, setTheme] = useContext(ThemeContext);

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
          <div className="form-group">
            <label htmlFor="theme">Theme</label>
            <select
              className="form-control"
              value={theme}
              onChange={e => setTheme(e.target.value)}
              onBlur={e => setTheme(e.target.value)}>
              <option value="peru">Peru</option>
              <option value="darkblue">Dark Blue</option>
              <option value="mediumorchid">Medium Orchid</option>
              <option value="chartreuse">Chartreuse</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary" style={{ backgroundColor: theme }}>Submit</button>
        </form>
      </div>
      <div className="col-8">
        <Results pets={pets} />
      </div>
    </div >
  );
}

export default SearchParams;