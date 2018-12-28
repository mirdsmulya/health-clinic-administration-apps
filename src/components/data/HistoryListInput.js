import {Link} from 'react-router';
import React, {PropTypes} from 'react';
import TextAreaInput from '../common/TextAreaInput';
import TextInput from '../common/TextInput';

const HistoryListInput = ({data, onChange}) => {
  return(
    <tr>
    <td><TextInput
          name = "date"
          placeholder= "Tanggal"
          onChange = {onChange}
          value= {data.medicalHistory.date}
        />
    </td>
      <td><TextInput
            name = "diagnose"
            placeholder= "Diagnosa"
            onChange = {onChange}
            value= {data.medicalHistory.diagnose}
          />
      </td>
      <td><TextInput
            name = "therapy"
            placeholder= "Terapi"
            onChange = {onChange}
            value= {data.medicalHistory.therapy}
          />
      </td>
      <td><button className="btn">Tambah Riwayat</button></td>

    </tr>
  );
};


HistoryListInput.propTypes = {
  data: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func
};

export default HistoryListInput;
