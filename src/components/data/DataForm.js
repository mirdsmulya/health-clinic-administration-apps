
import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';


const DataForm = ({data, onSave, onChange, loading, errors, allDatas}) => {
  return (
    <form>
      <div>
      <h1>Pengaturan Data Pasien </h1>
      </div>
      <TextInput
        name="name"
        label="Name"
        value={data.name}
        onChange={onChange}
         />

      <SelectInput
        name="gender"
        label="Jenis Kelamin"
        value={data.gender}
        defaultOption="--"
        options={allDatas}
        onChange={onChange}
         />
      <TextInput
        name="age"
        label="Usia"
        value={data.age}
        onChange={onChange}
        />


      <TextInput
        name="address"
        label="Alamat"
        value={data.address}
        onChange={onChange}
        />

      <h1> </h1>

      <input
        type="submit"
        disabled={loading}
        value={loading ? 'Saving..' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>


    </form>

  );

};

DataForm.propTypes = {
  data: React.PropTypes.object.isRequired,
  loading: React.PropTypes.bool.isRequired,
  errors: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.function,
  onSave: React.PropTypes.function,
  allDatas: React.PropTypes.array
};
export default DataForm;

/*
<SelectInput
  name="dataId"
  label="ID"
  value={data.id}
  defaultOption="Pilih ID"
  options={allDatas}
  onChange={onChange}
   />
*/
