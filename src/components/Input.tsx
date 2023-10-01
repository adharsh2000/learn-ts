

const Input = () => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    
  }
  return (
    <input type="text" value="" onChange={handleChange} />
  );
};

export default Input;
