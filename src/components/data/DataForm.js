import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const DataForm = ({data, onSave, onChange, allDatas, options, onDelete, buttonStatus}) => {
  return (
    <form>
      <div>
      <h1>Pengaturan Data Pasien</h1>
      </div>
      
      <TextInput
        name="name"
        label="Name"
        value={data.name}
        onChange={onChange} />

      <SelectInput
        name="gender"
        label="Jenis Kelamin"
        value={data.gender}
        onChange={onChange}
        options={options} />

      <TextInput
        name="age"
        label="Usia"
        value={data.age}
        onChange={onChange} />

      <TextInput
        name="address"
        label="Alamat"
        value={data.address}
        onChange={onChange} />

      <input
        id="save"
        type="submit"
        className="btn btn-primary"
        onClick={onSave} />

      <input
        id="delete"
        type="submit"
        disabled={buttonStatus}
        value="Delete"
        className="btn btn-danger pull right"
        onClick={onDelete} />
    </form>
  );
};

DataForm.propTypes = {
  data: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.function,
  onSave: React.PropTypes.function,
  allDatas: React.PropTypes.array,
  options: React.PropTypes.object.isRequired,
  onDelete: React.PropTypes.function,
  buttonStatus: React.PropTypes.func
};

export default DataForm;
