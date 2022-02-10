const Input = (props) => {
  const { type, name, value, placeholder, handleChange,required } = props;

  return (
    <input
      className="search-input"
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      required={required}
    />
  );
};

export default Input;
