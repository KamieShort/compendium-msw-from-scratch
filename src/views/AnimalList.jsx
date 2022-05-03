import React, { useState, useEffect } from 'react';
import { fetchAnimals } from '../services/fetch';
import DropDown from '../components/DropDown';

export default function AnimalList() {
  const [animals, setAnimals] = useState([]);
  const [type, setType] = useState('');
  const [filteredList, setFilteredList] = useState([]);
  const [dropdown, setDropdown] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAnimals = async () => {
      try {
        const data = await fetchAnimals();

        setAnimals(data);
        const options = data.map((animalType) => {
          return animalType.animal_type;
        });
        setDropdown([...new Set(options)]);
      } catch (e) {
        setErrorMessage(
          'Woops...something went wrong. Please refresh the page.'
        );
      } finally {
        setLoading(false);
      }
    };
    getAnimals();
  }, []);

  const filteredAnimals = (category) => {
    setType(category);
    setFilteredList(
      animals.filter(
        (animal) => animal.animal_type === category || category === 'All'
      )
    );
  };

  if (loading) return <div className="loader">Loading...</div>;

  return (
    <div>
      <DropDown
        dropdown={dropdown}
        filteredList={filteredList}
        type={type}
        filteredAnimals={filteredAnimals}
      />
      <h2>Animals: </h2>

      {(filteredList.length ? filteredList : animals).map((animal) => (
        <ul key={animal.id}>
          <h2>{animal.name}</h2>
          <li>Type: {animal.animal_type}</li>
          <p>Diet: {animal.diet}</p>
          <p>Habitat: {animal.habitat}</p>
          <img
            alt="animals"
            src={animal.image_link}
            height="200"
            border="3px solid black"
          />
        </ul>
      ))}
    </div>
  );
}
