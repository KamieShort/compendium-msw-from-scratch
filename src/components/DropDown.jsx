import React from 'react';

export default function DropDown({ type, dropdown, filteredAnimals }) {
  const handleChange = (e) => {
    filteredAnimals(e.target.value);
  };

  return (
    <select value={type} onChange={handleChange}>
      {dropdown.map((animal) => (

        // combine duplicates possibly using SET method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

        <option key={animal}>{animal}</option>
      ))}
    </select>
  );
}
