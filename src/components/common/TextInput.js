import React, {PropTypes} from 'react';



const TextInput = ({name, value, error, placeholder, onChange, label }) => {
  let wrapperClass='form-group';
  if (error && error.length > 0) {
    wrapperClass += " " + "Has error";
  }
  return (
    <div className="wrapperClass">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
        name={name}
        type="text"
        placeholder={placeholder}
        className="form-control"
        onChange={onChange}
        value={value} />

      {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>

  );
};

TextInput.propTypes = {
  name: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.string.isRequired,
  error: React.Proptypes.string.isRequired,
  placeholder: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired
};

export default TextInput;
