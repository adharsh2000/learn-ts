import { Name } from "../types/Persoon.types";


// type PropPersons = {
//   names: {
//     first: string;
//     last: string;
//   }[];
// };


type PropPersons = {
  names: Name[];
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
