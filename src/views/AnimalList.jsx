import React, { useState, useEffect } from 'react';
import { fetchAnimals } from '../services/fetch';
import DropDown from '../components/DropDown';

export default function AnimalList() {
  const [animals, setAnimals] = useState([]);
  const [type, setType] = useState([]);

  const [loading, setLoading] = useState(true);

  //

  useEffect(() => {
    const getAnimals = async () => {
      try {
        const data = await fetchAnimals();

        setAnimals(data);
        console.log(data);

        setTimeout(() => {
          setLoading(false);
        }, 750);
      } catch (e) {
        setErrorMessage(
          'Woops...something went wrong. Please refresh the page.'
        );
        setLoading(false);
      }
    };
    getAnimals();
  }, [type]);

  // const handleSelectedType = () => {
  // accept a type as an argument
  // filter based on argument value aka type (const filteredAnimals = .filter  )

  const filterAnimals = (animal) => {
    console.log(animal);
    setType(
      animals.filter((animal) => animal.animal_type === type || type === 'All')
    );
  };

  if (loading) return <div className="loader">Loading...</div>;

  return (
    <div>
      <DropDown animals={animals} onChange={filterAnimals} type={type} />

      {/* {filterAnimals().map((animal) => ( */}
      {/* {animals.map((animal) => ( */}
      {(type.length ? type : animals).map((animal) => (
        <div key={animal.id}>
          <h2>{animal.name}</h2>
          <h3>Type: {animal.animal_type}</h3>
          <h3>Diet: {animal.diet}</h3>
          <h3>Habitat: {animal.habitat}</h3>
          <img src={animal.image_link} height="200" border="3px solid black" />
        </div>
      ))}
    </div>
  );
}
