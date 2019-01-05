import {Link} from 'react-router';
import React, {PropTypes} from 'react';

const HistoryListRow = ({data}) => {
  return(
    <tr>
      <td>{data.date}</td>
      <td>{data.diagnose}</td>
      <td>{data.therapy}</td>

    </tr>
  );
};


HistoryListRow.propTypes = {
  data: PropTypes.object.isRequired
};

export default HistoryListRow;


/*
<td>{data.medicalHistory.date}</td>
<td>{data.medicalHistory.diagnose}</td>
<td>{data.medicalHistory.therapy}</td>
*/
