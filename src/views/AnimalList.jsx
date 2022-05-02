import React, { useState, useEffect } from 'react';
import { fetchAnimals, fetchType } from '../services/fetch';
import DropDown from '../components/DropDown';

export default function AnimalList() {
  const [animals, setAnimals] = useState([]);
  const [type, setType] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const [loading, setLoading] = useState(true);

  //

  // useEffect(() => {
  //   const getAnimals = async () => {
  //     try {
  //       const data = await fetchAnimals();

  //       setAnimals(data);
  //       console.log(data);
  //     } catch (e) {
  //       setErrorMessage(
  //         'Woops...something went wrong. Please refresh the page.'
  //       );
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   getAnimals();
  // }, []);

  useEffect(() => {
    const getAnimals = async () => {
      try {
        const data = await fetchAnimals();

        setAnimals(data);
        console.log(data);
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

  // useEffect(() => {
  //   const getType = async () => {
  //     const data = await fetchType(); //try to fetch animal by type//

  //     setType(data);
  //   };
  //   getType();
  // }, []);

  // useEffect(() => {
  //   setType(type);
  // }, [type]);

  const filteredAnimals = (type) => {
    setFilteredList(
      //setFilteredList
      animals.filter((animal) => animal.animal_type === type || type === 'All')
    );
  };

  if (loading) return <div className="loader">Loading...</div>;

  return (
    <div>
      <DropDown
        animals={animals}
        onChange={filteredAnimals}
        filteredList={filteredList}
        type={type}
        // filteredAnimals={filteredAnimals}
      />
      <h2>Animals: </h2>

      {(type.length ? type : animals).map((animal) => (
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
