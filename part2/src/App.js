import { useState } from "react";
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";


const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("")

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = { name: newName, number: newNumber };
    if (
      persons.find(
        (person) => JSON.stringify(person) === JSON.stringify(newPerson)
      )
    ) {
      const message = newName + " is already added to phonebook";
      alert(message);
    } else {
      setPersons(persons.concat(newPerson));
    }
  };

  const inputPerson = (event) => {
    const name = event.target.value;
    console.log(name);
    setNewName(name);
  };

  const inputNumber = (event) => {
    const number = event.target.value;
    console.log(number);
    setNewNumber(number);
  };

  const filterInput = (filterName.length === 0) ? persons : (persons.filter(person => person.name.toLowerCase().match(filterName) ))

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter filter={setFilterName} />

      <h3>add a new</h3>

      <PersonForm add={addPerson} person={inputPerson} number={inputNumber} />

      <h2>Numbers</h2>
      
      <Persons filterInput={filterInput} />

    </div>
  );
};

export default App;
