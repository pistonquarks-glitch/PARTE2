import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://studies.cs.helsinki.fi/restcountes/api/all')
      .then(response => response.json())
      .then(data => setCountries(data));
  }, []);

  const renderCountry = (country) => (
    <div key={country.alpha2Code}>
      <h3>{country.name}</h3>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <p>Area: {country.area} km²</p>
    </div>
  );

  return (
    <div>
      <h1>Countries Application</h1>
      <p>Total countries: {countries.length}</p>
      <div className="countries">
        {countries.length > 0 ? countries.map(renderCountry) : (
          <p>No countries found</p>
        )}
      </div>
    </div>
  );
};

export default App;