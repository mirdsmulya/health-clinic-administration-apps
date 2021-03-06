import React, {PropTypes} from 'react';



const TextAreaInput = ({name, value, errors, placeholder, onChange, label }) => {
  let wrapperClass='form-group';
  if (errors && errors.length > 0) {
    wrapperClass += " " + "Has error";
  }
  return (
    <div className="wrapperClass">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <TextAreaInput
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

TextAreaInput.propTypes = {
  errors: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func,
  value: React.PropTypes.string.isRequired,

  placeholder: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired
};

export default TextAreaInput;
