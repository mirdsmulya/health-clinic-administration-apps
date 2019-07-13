import React, {PropTypes} from 'react';


const DataSearch = ({name, value, onChange}) => {

  return (
    <div className="wrapperClass">
      <label htmlFor={name}></label>
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
  name: React.PropTypes.string,
  onChange: React.PropTypes.func,
  value: React.PropTypes.string
};


export default DataSearch;
