const Persons = (props) => {
  return (
    <div>
      {props.filterInput.map((person) => (
        <div key={person.name}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  );
};

export default Persons;