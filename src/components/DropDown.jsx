import React from 'react';

export default function DropDown({ type, dropdown, filteredAnimals }) {
  const handleChange = (e) => {
    filteredAnimals(e.target.value);
  };

  return (
    <select value={type} onChange={handleChange}>
      {dropdown.map((animal) => (
        <option key={animal}>{animal}</option>
      ))}
    </select>
  );
}
