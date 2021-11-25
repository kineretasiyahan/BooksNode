const Input = (props) => {
  const { type, name, value, placeholder, handleChange } = props;

  return (
    <input
      className="input"
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      required
    />
  );
};

export default Input;
