const Filter = (props) => {
  const filterShow = (event) => {
    const input = event.target.value;
    console.log(input);
    props.filter(input.toLowerCase());
  };

  return (
    <div>
      filter shown with <input onChange={filterShow} />
    </div>
  );
};

export default Filter;
