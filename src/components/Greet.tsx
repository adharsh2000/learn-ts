type GreetType = {
  name: string;
  count?: number;
  isLoggedin: boolean;
};

const Greet = (props: GreetType) => {
    const {count = 0}  = props
  return (
    <div>
      <h1>
        {props.isLoggedin
          ? `welcome ${props.name} you have ${count} unread messages!`
          : "welcome"}
      </h1>
    </div>
  );
};

export default Greet;
