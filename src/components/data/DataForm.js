import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
//import SelectInput from '../common/SelectInput';


const DataForm = ({data, onSave, onChange, loading, errors}) => {
  return (
    <form>
      <h1>Pengaturan Data Pasien </h1>
      <TextInput
        name="name"
        label="Name"
        value={data.name}
        onChange={onChange}
        error={errors.name} />

      <TextInput
        name="address"
        label="Alamat"
        value={data.address}
        onChange={onChange}
        error={errors.address} />

      <TextInput
        name="age"
        label="Usia"
        value={data.age}
        onChange={onChange}
        error={errors.age} />

      <TextInput
        name="lastArrived"
        label="Tanggal Berobat Terakhir"
        value={data.lastArrived}
        onChange={onChange}
        error={errors.lastArrived} />

      <TextInput
        name="medicalHistory"
        label="Riwayat Medis Terakhir"
        value={data.medicalHistory}
        onChange={onChange}
        error={errors.medicalHistory} />

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
  onChange: React.PropTypes.function.isRequired,
  onSave: React.PropTypes.function.isRequired
};
export default DataForm;
