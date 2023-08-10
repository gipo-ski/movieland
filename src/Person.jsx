const Person = (props) => {
  return (
    <>
      <h2>Name: {props.name}</h2>
      <h2>Surname: {props.surname}</h2>
      <h2>Age: {props.age}</h2>
    </>
  );
};

export default Person;
