import {Link} from 'react-router';
import React, {PropTypes} from 'react';
import TextAreaInput from '../common/TextAreaInput';
import TextInput from '../common/TextInput';

const HistoryListInput = ({med, onChange, onClick, buttonStatus}) => {
  return(
    <tr>
    <td><TextInput
          name = "date"
          label= ""
          placeholder= "Tanggal"
          onChange = {onChange}
          value= {med.date} />
    </td>
    <td>

        <TextInput
            name = "diagnose"
            label = ""
            placeholder= "Diagnosa"
            onChange = {onChange}
            value= {med.diagnose} />

      </td>
      <td><TextInput
            name = "therapy"
            label = ""
            placeholder= "Terapi"
            onChange = {onChange}
            value= {med.therapy} />
      </td>
      <td><button className="btn margin-top" onClick={onClick} disabled={buttonStatus}>Tambah Riwayat</button></td>
    </tr>
  );
};

HistoryListInput.propTypes = {
  med: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func,
  onClick:  React.PropTypes.func,
  buttonStatus: React.PropTypes.func
};

export default HistoryListInput;
