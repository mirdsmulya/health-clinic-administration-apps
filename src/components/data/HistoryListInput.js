import {Link} from 'react-router';
import React, {PropTypes} from 'react';
import TextAreaInput from '../common/TextAreaInput';
import TextInput from '../common/TextInput';

const HistoryListInput = ({med, onChange, onClick, buttonStatus}) => {
  return(
    <tr>
    <td><TextInput
          name = "date"
          placeholder= "Tanggal"
          onChange = {onChange}
          value= {med.date}
        />
    </td>
      <td>

        <TextInput
            name = "diagnose"
            placeholder= "Diagnosa"
            onChange = {onChange}
            value= {med.diagnose}
          />

      </td>
      <td><TextInput
            name = "therapy"
            placeholder= "Terapi"
            onChange = {onChange}
            value= {med.therapy}
          />
      </td>
      <td><button className="btn" onClick={onClick} disabled={buttonStatus}>Tambah Riwayat</button></td>

    </tr>
  );
};


HistoryListInput.propTypes = {
  med: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func,
  onClick:  React.PropTypes.fucnc,
  buttonStatus: React.PropTypes.func
};

export default HistoryListInput;
