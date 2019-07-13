import React, {PropTypes} from 'react';



const TextInput = ({name, value, errors, placeholder, onChange, label }) => {
  let wrapperClass='form-group';
  if (errors && errors.length > 0) {
    wrapperClass += " " + "Has error";
  }
  return (
    <div className="wrapperClass">
      <label htmlFor={name}>{label}</label>
      <div className="form">
        <input
        name={name}
        type="text"
        placeholder={placeholder}
        className="form-control"
        onChange={onChange}
        value={value} />

      {errors && <div className="alert alert-danger">{errors}</div>}
      </div>
    </div>

  );
};

TextInput.propTypes = {
  errors: PropTypes.string,
  name: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func,
  value: React.PropTypes.string.isRequired,

  placeholder: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired
};

export default TextInput;
