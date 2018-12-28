import React, {PropTypes} from 'react';


const DataSearch = ({name, value, onChange, label}) => {

  return (
    <div className="wrapperClass">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
        name={name}
        type="text"
        placeholder="Cari Berdasarkan Nama.."
        className="form-control"
        onChange={onChange}
        value={value} />

      </div>
    </div>

  );
};

DataSearch.propTypes = {
  //errors: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func,
  value: React.PropTypes.string.isRequired,

  //placeholder: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired
};


export default DataSearch;
