const PersonForm = (props) => {
  return (
    <form onSubmit={props.add}>
      <div>
        name: <input onChange={props.person} />
      </div>
      <div>
        number: <input onChange={props.number} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
