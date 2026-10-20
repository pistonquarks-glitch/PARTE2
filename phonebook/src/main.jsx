import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    fetch('/api/persons')
      .then(response => response.json())
      .then(data => setPersons(data));
  }, []);

  const deletePerson = (id) => {
    fetch(`/api/persons/${id}`, { method: 'DELETE' })
      .then(response => response.json())
      .then(data => {
        setPersons(persons.filter(person => person.id !== id));
        alert(`${data.name} deleted successfully`);
      });
  };

  const handleChange = (event, id) => {
    const value = event.target.value;
    const person = persons.find(p => p.id === id);
    person.name = value;
    setPersons(persons.map(p => p.id === id ? person : p));
  };

  const addPerson = (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const newPerson = { name, id: Math.floor(Math.random() * 1000000) };
    fetch('/api/persons', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPerson)
    })
      .then(response => response.json())
      .then(data => {
        setPersons(persons.concat(data));
        document.getElementById('name').value = '';
        alert(`${data.name} added successfully`);
      });
  };

  return (
    <div>
      <h1>Phonebook Application</h1>
      <form onSubmit={addPerson}>
        <input id="name" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {persons.map(person => (
          <li key={person.id}>
            {person.name}
            <button onClick={() => deletePerson(person.id)}>delete</button>
            <button onClick={() => console.log('edit', person.id)}>edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;