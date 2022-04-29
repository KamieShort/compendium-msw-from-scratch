import React from 'react';

export default function DropDown({ type, animals, onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <select value={type} onChange={handleChange}>
      {animals.map((animal) => (
        // map is displaying duplicate types
        // combine duplicates possibly using SET method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

        <option key={animal.id}>{animal.animal_type}</option>
      ))}
    </select>
  );
}
