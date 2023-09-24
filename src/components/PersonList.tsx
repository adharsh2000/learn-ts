type PropPersons = {
  names: {
    first: string;
    last: string;
  }[];
};

const PersonList = (props: PropPersons) => {
  return (
    <div>
      {props.names.map((item) => (
        <h1 key={item.first}>
          {item.first} {item.last}
        </h1>
      ))}
    </div>
  );
};

export default PersonList;
