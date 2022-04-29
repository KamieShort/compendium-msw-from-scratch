import React, { useState, useEffect } from 'react';
import { fetchAnimals } from '../services/fetch';
import DropDown from '../components/DropDown';

export default function AnimalList() {
  const [animals, setAnimals] = useState([]);
  const [type, setType] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  // const [loading, setLoading] = useState(true);

  //

  useEffect(() => {
    const getAnimals = async () => {
      const data = await fetchAnimals();

      setAnimals(data);
      console.log(data);
    };
    getAnimals();
  }, []);

  // const handleSelectedType = () => {
  // accept a type as an argument
  // filter based on argument value aka type (const filteredAnimals = .filter  )

  const filterAnimals = () => {
    setType(
      animals.filter((animal) => animal.animal_type === type || type === 'All')
    );
  };

  // (setSelectedType(filterAnimals))
  // };

  return (
    <div>
      <DropDown
        animals={animals}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      {/* {(filterAnimals.length ? filterAnimals : animals).map((animal) => ( */}
      {/* {animals.map((animal) => ( */}
      {filterAnimals().map((animal) => (
        <div key={animal.id}>
          <h2>{animal.name}</h2>
          <p>Type: {animal.animal_type}</p>
          <p>Diet: {animal.diet}</p>
          <p>Habitat: {animal.habitat}</p>
          <img src={animal.image_link} height="200" border="3px solid black" />
        </div>
      ))}
    </div>
  );
}
