import React, { useState, useEffect } from 'react';
import { fetchAnimals } from '../services/fetch';

export default function AnimalList() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const getAnimals = async () => {
      const data = await fetchAnimals();

      setAnimals(data);
      console.log(data);
    };
    getAnimals();
  }, []);

  return (
    <div>
      {animals.map((animal) => (
        <div key={animal.id}>
          <h2>{animal.name}</h2>
        </div>
      ))}
    </div>
  );
}
