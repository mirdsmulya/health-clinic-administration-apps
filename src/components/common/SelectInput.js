import React, {PropTypes} from 'react';


const SelectInput = ({name, value, defaultOption, options, label, onChange, error}) => {

  return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <div className="field">
          <select name={name}
                  value={value}
                  onChange={onChange}>
          <option value={value}>{value}</option>
          <option value="">--</option>
          <option value="Pria">Pria</option>
          <option value="Wanita">Wanita</option>


          </select>
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
      </div>

  );
};

SelectInput.propTypes = {
  name: React.PropTypes.object.isRequired,
  value: React.PropTypes.object,
  onChange: React.PropTypes.func,
  defaultOption: React.PropTypes.string,
  option: React.PropTypes.string,
  error: React.PropTypes.string,
  label: React.PropTypes.string,
  options: React.PropTypes.array.isRequired

};

export default SelectInput;


/*
name={name}
value={value}
onChange={onChange}
className="form-control">
<option value="">{defaultOption}</option>
{options.map((option) => {
  return <option key={option.value} value={option.value}>{option.text}</option>;



  <option value="">{value}</option>
  <option value="Pria">Pria</option>
  <option value="Wanita">Wanita</option>





              <option value="">{defaultOption}</option>
              {options.map((option) => {
                <option value={option.value} key={option.value}>{option.text}</option>;})}






  */
