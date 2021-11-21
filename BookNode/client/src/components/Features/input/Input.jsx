const Input = (props) => {
    const { type, name, placeholder, handleChange } = props;
  
    return (
      <input
        class="input"
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        required
      />
    );
  };
  
  export default Input;