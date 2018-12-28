import {Link} from 'react-router';
import React, {PropTypes} from 'react';
import TextAreaInput from '../common/TextAreaInput';

const HistoryListInput = ({data, onChange}) => {
  return(
    <tr>
      <td></td>
      <td><TextAreaInput
            name = "Diagnosa"
            placeholder= "Diagnosa"
            onChange = {onChange}
            value= {data.medicalHistory}
          />
      </td>

    </tr>
  );
};


HistoryListInput.propTypes = {
  data: PropTypes.object.isRequired,
  onChange: PropTypes.func
};

export default HistoryListInput;
