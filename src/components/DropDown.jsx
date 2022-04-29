import React from 'react';

export default function DropDown({ animals, selectedType, setSelectedType }) {
  return (
    <select
      value={selectedType}
      onChange={(e) => setSelectedType(e.target.value)}
    >
      {animals.map((animal) => (
        // map is displaying duplicate types
        // combine duplicates possibly using SET method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

        <option key={animal.id}>{animal.animal_type}</option>
      ))}
    </select>
  );
}
