import React, { useState, useEffect } from 'react';
import { fetchAnimals } from '../services/fetch';
import DropDown from '../components/DropDown';

export default function AnimalList() {
  const [animals, setAnimals] = useState([]);
  const [type, setType] = useState([]);
  // const [selectedType, setSelectedType] = useState([]);

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

  // useEffect(() => {
  //   setType(animals);
  // }, [selectedType]);

  const filterAnimals = (animal) => {
    console.log(animal);
    setType(
      animals.filter((animal) => animal.animal_type === type || type === 'All')
    );
  };

  if (loading) return <div className="loader">Loading...</div>;

  return (
    <div>
      <DropDown
        animals={animals}
        onChange={filterAnimals}
        type={type}
        // setType={setSelectedType}
      />
      <h2>Animals: </h2>

      {/* {filterAnimals().map((animal) => ( */}
      {/* {animals.map((animal) => ( */}
      {(type.length ? type : animals).map((animal) => (
        <ul key={animal.id}>
          <h2>{animal.name}</h2>
          <li>Type: {animal.animal_type}</li>
          <p>Diet: {animal.diet}</p>
          <p>Habitat: {animal.habitat}</p>
          <img src={animal.image_link} height="200" border="3px solid black" />
        </ul>
      ))}
    </div>
  );
}
